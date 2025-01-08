import React, {} from 'react';
import { BLOG_ROUTE, BRON_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const MainPage = observer(() => {
  const [currentId, setCurrentId] = React.useState(1);
    return (
<>
  <header>
    <nav className="sticky">
      <div className="navbar">
        <ul className="navlist-1">
          <li>
            <a href="#target_section1">Взрослый бассейн</a>
          </li>
          <li>
            <a href="#target_section2">Детский бассейн</a>
          </li>
          <li>
            <a href="#target_section3">Кафе</a>
          </li>
          <li>
            <a href="#target_section4">Стоимость</a>
          </li>
          <li>
            <a href="#target_section5">Правила посещения</a>
          </li>
          <li>
            <NavLink to={LOGIN_ROUTE}>Вход</NavLink>
          </li>
          <li>
            <NavLink to={BLOG_ROUTE}>Отзывы</NavLink>
          </li>
        </ul>
        <div className="right">
          <div className="number">+7 (923) 634-00-72</div>
          <div className="social-media-images">
            <a href="https://vk.com/hypebeachnvkz" target="_blank">
              <img src="source/images/vk.png" alt="" />
            </a>
            <a
              href="https://www.instagram.com/hype_beach_?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
            >
              <img src="source/images/instagram.png" alt="" />
            </a>
          </div>
          <a>
            <NavLink className="bronirovat" to={BRON_ROUTE}>Забронировать</NavLink>
          </a>
        </div>
      </div>
    </nav>
  </header>
  <section>
    <div className="background">
      <div className="gradient">
        <div className="front-text">
          <h1 style={{ fontSize: 60 }}>
            Место, где можно забыть о городской суете
          </h1>
          <h1>Ждём вас каждый день с 10:00 до 21:00</h1>
        </div>
      </div>
    </div>
    <div className="main-content">
      <div id="target_section1" className="segment-1">
        <h2>Взрослый бассейн</h2>
        <div className="all-cards">
          <div className="images-grid">
            <div className="row">
              <div className="image-with-text">
                <img src="source/images/18ked_pool.svg" alt="" />
                <h3>Размер</h3>
                <p>
                  Размер большого бассейна 30*15 м, глубина составляет 1,35
                  метра.
                </p>
              </div>
              <div className="image-with-text">
                <img src="source/images/cowork_temperature.svg" alt="" />
                <h3>Температура</h3>
                <p>Вода нагревается до температуры 27с.</p>
              </div>
              <div className="image-with-text">
                <img src="source/images/6bs_clean.svg" alt="" />
                <h3>Чистота</h3>
                <p>
                  Мы ответственно следим за чистотой бассейна, регулярно берем
                  пробы воды, проводим ее тщательную фильтрацию и очистку.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="image-with-text">
                <img src="source/images/Tilda_Icons_47dlvr_safety.svg" alt="" />
                <h3>Безопасность</h3>
                <p>За безопасностью наших гостей следят спасатели.</p>
              </div>
              <div className="image-with-text">
                <img src="source/images/6bs_sunbaths.svg" alt="" />
                <h3>Погода</h3>
                <p>
                  В любую погоду в нашем бассейне плавать комфортно и безопасно.
                </p>
              </div>
              <div className="image-with-text">
                <img src="source/images/basic_life_buoy.svg" alt="" />
                <h3>Прокат</h3>
                <p>
                  А еще можно воспользоваться прокатом игрушек для плавания, и
                  неспешно скользить по воде на большом фламинго или дольке
                  арбуза* и сделать отличные фотографии.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="images_grid_after_text">
        <img src="source\images\IMG_first_segment_1.JPG" alt="" />
        <div>
          <div>
            <img src="source\images\IMG_first_segment_2.webp" alt="" />
            <img src="source\images\IMG_first_segment_3.webp" alt="" />
          </div>
          <img src="source\images\IMG_first_segment_4.webp" alt="" />
        </div>
      </div>
      <div id="target_section2" className="segment-1">
        <h2>Детский бассейн</h2>
        <div className="all-cards">
          <div className="images-grid">
            <div className="row">
              <div className="image-with-text">
                <img src="source/images/18ked_pool.svg" alt="" />
                <h3>Размер</h3>
                <p>Размер детского бассейна 6*12 м, глубина составляет 0,7м.</p>
              </div>
              <div className="image-with-text">
                <img src="source/images/cowork_temperature.svg" alt="" />
                <h3>Температура</h3>
                <p>Вода нагревается до температуры 30с.</p>
              </div>
              <div className="image-with-text">
                <img src="source/images/6bs_clean.svg" alt="" />
                <h3>Чистота</h3>
                <p>
                  Мы ответственно следим за чистотой бассейна, регулярно берем
                  пробы воды, проводим ее тщательную фильтрацию и очистку.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="image-with-text">
                <img src="source/images/Tilda_Icons_47dlvr_safety.svg" alt="" />
                <h3>Безопасность</h3>
                <p>За безопасностью наших маленьких гостей следят спасатели.</p>
              </div>
              <div className="image-with-text">
                <img src="source/images/Layer_12.svg" alt="" />
                <h3>Детская площадка</h3>
                <p>
                  Бассейн расположен рядом с детской зоной, так что дети могут с
                  удовольствием чередовать плавание в бассейне и игры на детской
                  площадке.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="images_grid_after_text_2">
        <img src="source/images/IMG_second_segment_1.jpg" alt="" />
        <img src="source/images/IMG_second_segment_2.jpg" alt="" />
      </div>
      <div id="target_section3" className="segment-2">
        <h2>
          Кафе
          <br />
          <br />
        </h2>
        <div>
          <p>
            На территории «HypeBeach» работает зона фуд-корта.
            <br />
            <br />
            Вы можете попробовать авторские лимонады, коктейли, мороженое,
            прохладительные напитки, ароматные блюда, приготовленные на гриле,
            выпечку, wok, свежие салаты, бургеры и хрустящие закуски. Для наших
            маленьких гостей есть детское меню.
            <br />
            <br />
            Приветливый персонал, уютное кафе и вкусная кухня сделаю ваш отдых
            приятным и комфортным.
            <br />
            <br />
            <br />
          </p>
        </div>
        <h2>
          BUNGALO BAR
          <br />
          <br />
        </h2>
        <div className="bungalo_images">
          <img src="source/images/IMG_Bungalo_1.jpg" alt="" />
          <img src="source/images/IMG_Bungalo_2.jpg" alt="" />
          <div>
            <img src="source/images/IMG_Bungalo_3.webp" alt="" />
          </div>
        </div>
        <h2>
          REBRO
          <br />
          <br />
        </h2>
        <div className="rebro">
          <img src="source/images/rebro1.webp" alt="" />
          <img src="source/images/rebro2.webp" alt="" />
        </div>
        <h2>
          МОНТАНА
          <br />
        </h2>
        <div className="montana">
          <img src="source/images/Montana.jpg" alt="" />
        </div>
        <h2>
          ПОПЛАВОК
          <br />
          <br />
        </h2>
        <div className="poplavok">
          <img src="source/images/poplavok.webp" alt="" />
        </div>
      </div>
    </div>
    <div className="end-of-main-content">
      <img src="source/images/otdix.jpg" alt="" />
      <div className="overlay-text">Отдыхайте с нами</div>
    </div>
    <div id="target_section4" className="segment-3">
      <h2>Стоимость и тарифы</h2>
      <div className="text-grid">
        <table>
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Наименование тарифа</th>
              <th style={{ width: "10%" }}>Время действия тарифа</th>
              <th style={{ width: "5%" }}>Стоимость</th>
              <th style={{ width: "30%", textAlign: "center", fontSize: 30 }}>
                Описание
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="white-row">
              <td>"Основной"</td>
              <td>с 10:00 до 21:00</td>
              <td>800 руб.</td>
              <td>
                - Возможность пользоваться всеми преимуществами комплекса.
                <br />
                - Тариф от открытия до закрытия комплекса.
                <br />
                - Гарантия того, что вам достанется жезлонг.
                <br />
                - Обеспечение безопасности в воде и за ее пределами.
                <br />- Возможность приобретения алкоголя и кальянов.
              </td>
            </tr>
            <tr className="black-row">
              <td>"Студенческий"</td>
              <td>с 10:00 до 21:00</td>
              <td>600руб.</td>
              <td>
                - Возможность пользоваться всеми преимуществами комплекса.
                <br />
                - Тариф от открытия до закрытия комплекса.
                <br />
                - Гарантия того, что вам достанется жезлонг.
                <br />
                - Обеспечение безопасности в воде и за ее пределами.
                <br />- Возможность приобретения алкоголя и кальянов.
              </td>
            </tr>
            <tr className="white-row">
              <td>"Детский"</td>
              <td>с 10:00 до 21:00</td>
              <td>500 руб.</td>
              <td>
                - Возможность пользоваться всеми преимуществами комплекса.
                <br />
                - Тариф от открытия до закрытия комплекса.
                <br />
                - Гарантия того, что вам достанется жезлонг.
                <br />- Обеспечение безопасности в воде и за ее пределами.
              </td>
            </tr>
            <tr className="black-row">
              <td>"Zip zone"</td>
              <td>с 10:00 до 22:00</td>
              <td>1000 руб.</td>
              <td>
                - Возможность пользоваться всеми преимуществами комплекса.
                <br />
                - Тариф от открытия до закрытия комплекса.
                <br />
                - Гарантия того, что вам достанется жезлонг.
                <br />
                - Обеспечение безопасности в воде и за ее пределами.
                <br />
                - Возможность приобретения алкоголя и кальянов.
                <br />- Возможно находится на отдельной территории, где вас не
                потревожат.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="other-features">
          - Детям младше 14 лет разрешено находиться на территории комплекса
          только в присутствии взрослых, с 14 лет разрешено находиться без
          сопровождения взрослых при предъявлении паспорта;
          <br />
          - При наличии оснований для применения в отношении одного посетителя
          нескольких видов тарифов выбирается наименьший из них (при условии
          предоставления подтверждающего документа);
          <br />
          - Выбранный тариф и дополнительно оказанные услуги оплачиваются при
          выходе;
          <br />
          - Общий лимит для посетителей от 18 лет - 4000 руб + выбранный тариф;
          <br />
          - Общий лимит для несовершеннолетних посетителей от 14 лет - 2000 руб
          + выбранный тариф;
          <br />
          - Детям до 14 лет лимит не предоставляется, фиксируется только время
          входа и выхода с территории комплекса;
          <br />
          - Если лимит исчерпан, для его восстановления можно подойти на кассу
          выхода и внести потраченную сумму;
          <br />
          - Лимит можно тратить на любые услуги, предоставляемые комплексом
          (кафе, аренда плавательного инвентаря, покупка сопутствующих товаров)
          <br />
        </div>
        <a href="#">
          <div className="recvizites">
            <img src="source/images/arrow_circle_right.png" alt="" />
            Реквизиты
          </div>
        </a>
      </div>
      <h2 id="target_section5">Правила посещения</h2>
      <strong>
        Каждый посетитель, вошедший на территорию комплекса, автоматически
        подтверждает, что он ознакомлен с Правилами посещения и обязуется
        безоговорочно их соблюдать.
      </strong>
      <div className="rules">
        <div className="tabs">
          <button
            className="tab"
            onClick={() => setCurrentId(1)}
          >
            Общие
          </button>
          <button className="tab" onClick={() => setCurrentId(2)}>
            ЗАПРЕЩАЕТСЯ
          </button>
          <button className="tab" onClick={() => setCurrentId(3)}>
            НАРУШЕНИЯ
          </button>
        </div>
        <div id="general" className={currentId === 1 ? "content active" : "content"}>
          <h2>ОБЩИЕ ПРАВИЛА ПОСЕЩЕНИЯ КОМПЛЕКСА «HypeBeach»</h2>
          <ul>
            <li>
              Посещение комплекса разрешено для лиц младше 14 лет исключительно
              в сопровождении взрослого (от 18 лет); для лиц с 14 лет при
              предъявлении паспорта – без сопровождения взрослого;
              ответственность за жизнь и здоровье несовершеннолетних несут их
              законные представители;
            </li>
            <li>
              На территории комплекса действует система постоплаты - оплата
              товаров и услуг после их получения (оказания). При входе
              посетитель осуществляет выбор тарифа и получает электронный
              браслет с фиксированным лимитом. Тарифы и размер лимита
              устанавливаются Администрацией (уточняйте на кассе). Товары и
              услуги на территории комплекса приобретаются в пределах
              предоставленного лимита. Расчет денежными средствами (в том числе
              за услугу посещения) осуществляется при выходе с территории
              комплекса. Пополнение использованного лимита также производится на
              кассе у выхода;{" "}
            </li>
            <li>
              Посетитель обязан сохранять нефискальный чек (предчек), полученный
              при входе, до окончания посещения комплекса;
            </li>
            <li>
              На время посещения комплекса обязательно ношение электронного
              браслета, за исключением детей младше 5 лет;
            </li>
            <li>
              Администрация не несет ответственности за оставленных без
              присмотра детей;{" "}
            </li>
            <li>
              Администрация не несет ответственности за оставленные без
              присмотра вещи;{" "}
            </li>
            <li>
              Администрация оставляет за собой право отказать в посещении
              комплекса без объяснения причин.
            </li>
          </ul>
        </div>
        <div id="prohibited" className={currentId === 2 ? "content active" : "content"}>
          <h2>ПРАВИЛАМИ ПОСЕЩЕНИЯ КОМПЛЕКСА ЗАПРЕЩАЕТСЯ:</h2>
          <ul>
            <li>
              Находиться на территории комплекса лицам младше 14 лет без
              сопровождения взрослых;
            </li>
            <li>
              Детям младше 3 лет находиться на территории комплекса без
              специальных подгузников для плавания;
            </li>
            <li>
              Вход на территорию лицам, находящимся в алкогольном или
              наркотическом опьянении, а также употреблять наркотические
              средства и токсичные вещества на территории комплекса;
            </li>
            <li>Вход на территорию комплекса с животными;</li>
            <li>
              Приносить на территорию комплекса и употреблять принесенные с
              собой продукты питания и напитки (кроме детского питания и воды
              для малышей в закрытой заводской пластиковой или бумажной
              упаковке);
            </li>
            <li>
              Занимать шезлонг, не закрепленный за посетителем. Номер шезлонга
              привязан к электронному браслету и сообщается посетителю при
              получении браслета;
            </li>
            <li>
              Находиться в бассейне в нижнем белье или другой одежде, не
              предназначенной для плавания, а также без нее;
            </li>
            <li>Курить вне специально оборудованной зоны;</li>
            <li>
              Находиться в бассейне, входить в воду с продуктами питания,
              напитками и жевательной резинкой;
            </li>
            <li>
              Приносить на территорию комплекса холодное, огнестрельное,
              пневматическое, травматическое оружие, взрывчатые и токсичные
              вещества;
            </li>
            <li>
              Прыгать, нырять в воду с бортиков бассейна, удерживать друг друга
              под водой, выполнять акробатические трюки, создавать препятствия
              на воде другим посетителям;
            </li>
            <li>
              Плавать в зоне бассейна, где проводятся физкультурные занятия;
            </li>
            <li>Загрязнять помещения и сооружения комплекса;</li>
            <li>
              Самостоятельно регулировать любое инженерное оборудование
              комплекса;
            </li>
            <li>Передвигать шезлонги;</li>
            <li>
              Посещать комплекс лицам, болеющим инфекционными, вирусными и
              другими заразными заболеваниями, а также лицам с открытыми ранами
              и/или другими нарушениями здоровья, которые могут вызывать угрозу
              для здоровья и/или жизни самого лица, либо других посетителей;
            </li>
            <li>Приносить на территорию комплекса бьющиеся предметы;</li>
            <li>Подавать ложные сигналы о бедствии.</li>
          </ul>
        </div>
        <div id="violations" className={currentId === 3 ? "content active" : "content"}>
          <h2>
            ПРЕЙСКУРАНТ ЗА НЕСОБЛЮДЕНИЕ ПРАВИЛ ПОСЕЩЕНИЯ КОМПЛЕКСА
            <br /> «HypeBeach»
          </h2>
          <ul>
            <li>
              Утеря, повреждение, невозврат электронного браслета, выход за
              территорию комплекса с электронным браслетом
            </li>
            <p>При наличии предчека – штраф 1000 руб. </p>
            <span>
              Примечание: Также оплачивается посещение комплекса и все товары и
              услуги, приобретенные в комплексе по браслету
            </span>
            <p>
              При отсутствии предчека – штраф в размере 1 000 руб. + общий
              лимит, предоставляемый данной категории посетителей (независимо от
              остатка неиспользованного лимита).{" "}
            </p>
            <span>
              Примечание: Также оплачивается посещение комплекса по «Основному»/
              «Основному Льготному» тарифу (при предъявлении документа,
              подтверждающего право на льготу)
            </span>
            <li>
              Курение табачных изделий, использование электронных средств для
              курения, курительных смесей и дымчатых веществ вне специально
              отведенного для этого места – Штраф 1000 руб.*
            </li>
            <li>
              Использование некурительных табачных изделий, нахождение в
              состоянии алкогольного, наркотического, токсического опьянения,
              либо под воздействием психотропных и иных одурманивающих веществ –
              Штраф 1000 руб.*
            </li>
            <li>
              Пронос на территорию запрещенных законом и/или Правилами предметов
              – Штраф 1000 руб.*
            </li>
            <li>Вход в служебные и технические помещения – Штраф 500 руб.*</li>
            <li>
              Профессиональная фото- и видеосъемка в коммерческих целях,
              рекламная, торговая, коммерческая деятельность без согласования с
              Администрацией – Штраф 5000 руб.*
            </li>
            <li>Прием пищи и/или напитков в бассейне – Штраф 1000 руб.*</li>
            <li>
              Загрязнение территории, сооружений, оборудования комплекса – Штраф
              1000 руб.*
            </li>
            <li>
              Использование в водно-развлекательной зоне изделий для видео -
              звуковоспроизведения, видео - фото - съемки и другие предметы (за
              исключением мобильных телефонов) – Штраф 1000 руб.*
            </li>
            <li>
              Нарушение общественного порядка, драки, хулиганство, справление
              естественных нужд вне туалета и т.п. – Штраф 1000 руб.*
            </li>
            <li>
              Утрата или порча оборудования и / или иного имущества комплекса –
              Возмещение ущерба в размере фактической стоимости имущества
            </li>
            <span>
              *Оплата штрафа не освобождает виновное лицо от обязанности
              возместить причиненный ущерб. Администрация оставляет за собой
              право удалить нарушителя с территории комплекса, при этом
              посетитель не освобождается от оплаты стоимости посещения
              комплекса, а также оплаты всех товаров и услуг, приобретенных в
              комплексе
              <br />
            </span>
            <span>
              **Виновное лицо может быть привлечено к административной,
              гражданско-правовой, уголовной ответственности в соответствии с
              действующим законодательством.
            </span>
          </ul>
        </div>
      </div>
    </div>
    <div className="rec_container">
      <div />
      <div className="recvizites">
        <img src="source/images/arrow_circle_right.png" alt="" />
        Правила посещения комплекса (полные).pdf
      </div>
      <div className="recvizites">
        <img src="source/images/arrow_circle_right.png" alt="" />
        Изменения в Правила от 08.06.24.pdf
      </div>
    </div>
  </section>
</>

    );
})

export default MainPage;