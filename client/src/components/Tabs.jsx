import { useState } from "react";

export default function Tabs1() {
  const [currentID, setCurrentID] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const tickets = {
    1: {
      name: "Взрослый",
      price: 800,
      details: [
        "Возможность пользоваться всеми преимуществами комплекса.",
        "Тариф от открытия до закрытия комплекса.",
        "Гарантия того, что вам достанется жезлонг.",
        "Обеспечение безопасности в воде и за ее пределами.",
        "Возможность приобретения алкоголя и кальянов."
      ]
    },
    2: {
      name: "Детский",
      price: 500,
      details: [
        "Возможность пользоваться всеми преимуществами комплекса.",
        "Тариф от открытия до закрытия комплекса.",
        "Гарантия того, что вам достанется жезлонг.",
        "Обеспечение безопасности в воде и за ее пределами."
      ]
    },
    3: {
      name: "Студенческий",
      price: 600,
      details: [
        "Возможность пользоваться всеми преимуществами комплекса.",
        "Тариф от открытия до закрытия комплекса.",
        "Гарантия того, что вам достанется жезлонг.",
        "Обеспечение безопасности в воде и за ее пределами.",
        "Возможность приобретения алкоголя и кальянов."
      ]
    },
    4: {
      name: "VIP zone",
      price: 1000,
      details: [
        "Возможность пользоваться всеми преимуществами комплекса.",
        "Тариф от открытия до закрытия комплекса.",
        "Гарантия того, что вам достанется жезлонг.",
        "Обеспечение безопасности в воде и за ее пределами.",
        "Возможность приобретения алкоголя и кальянов.",
        "Возможно находиться на отдельной территории, где вас не потревожат."
      ]
    }
  };

  function changerulesslides(id) {
    setCurrentID(id);
  }

  function buyButton(id) {
    const newItem = { id, text: tickets[id].name, price: tickets[id].price };

    setCartItems((prevItems) => [...prevItems, newItem]);
    setTotalPrice((prevTotal) => prevTotal + tickets[id].price);
  }

  function removeItemFromCart(index) {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems];
      const removedItem = updatedCart.splice(index, 1)[0]; // Удаляем элемент
  
      if (removedItem) {
        setTotalPrice((prevTotal) => Math.max(0, prevTotal - removedItem.price/2)); // Отнимаем корректно
      }
  
      return updatedCart; // Обновляем корзину
    });
  }
  
  
  

  return (
    <>
      <div style={{ marginInline: "2vw" }} className="card">
        <div className="tab-menu">
          <div className="bron-tabs">
            {Object.keys(tickets).map((key) => (
              <div
                key={key}
                className={`bron-tab ${currentID === Number(key) ? "active" : ""}`}
                onClick={() => changerulesslides(Number(key))}
              >
                {tickets[key].name}
              </div>
            ))}
          </div>

          {Object.keys(tickets).map((key) => (
            <div key={key} className={`bron-content ${currentID === Number(key) ? "active" : ""}`}>
              <div className="text-container">
                {tickets[key].details.map((item, index) => (
                  <div key={index} className="text-row">{item}</div>
                ))}
                <div className="text-row">Цена: {tickets[key].price} руб</div>
              </div>
              <button onClick={() => buyButton(Number(key))}>В корзину</button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginInline: "2vw" }} className="card">
        <div className="count" style={{ justifyContent: "end" }}>
          <div className="final-count">
            <div className="count-container">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div key={index} className="container-row">
                    <p>
                      {item.text}: {item.price} руб
                    </p>
                    <button className="delete" onClick={() => removeItemFromCart(index)}>Удалить</button>
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
            <div className="final-count-text">Итого: {totalPrice} руб</div>
          </div>
        </div>
      </div>
    </>
  );
}
