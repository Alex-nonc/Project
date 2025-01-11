import { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { NavLink, useLocation } from "react-router-dom";
import { BRON_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { BLOG_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const locate = useLocation();

  let header;

  if (locate.pathname === MAIN_ROUTE) {
    header = (
      <>
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
          <NavLink to={BLOG_ROUTE}>Отзывы</NavLink>
        </li>
        {
    user.isAuth ? (
        <button className="login_main_btn" onClick={() => user.setIsAuth(false)}>Выход</button>
    ) : (
        <button className="login_main_btn"
        >
          <NavLink className = "login_main_btn" to={LOGIN_ROUTE}>Вход</NavLink>
        </button>
    )}
      </>
    );
  } else {
    header = (
      <>
      <li>
        <NavLink to={MAIN_ROUTE}>Главная</NavLink>
      </li>    
        </>
    )
}
  return (
    <header>
      <nav className="sticky">
        <div className="navbar">
          <ul className="navlist-1">
          {header}
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
              <NavLink className="bronirovat" to={BRON_ROUTE}>
                Забронировать
              </NavLink>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
});

export default NavBar;
