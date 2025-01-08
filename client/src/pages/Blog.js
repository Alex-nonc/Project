import React from "react";
import { MAIN_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Blog = observer(() => {
  return (
    <div>
      <header>
        <nav className="sticky">
          <div className="navbar">
            <ul className="navlist-1">
              <li>
                <NavLink to={MAIN_ROUTE}>
                  <a style={{ fontSize: 20 }}>
                    <img
                      style={{ width: 12 }}
                      src="images/arrow-right-solid.svg"
                      alt=""
                    />
                    Вернуться на главную
                  </a>
                </NavLink>
              </li>
            </ul>
            <div className="right">
              <div className="number">+7 (923) 507-30-70</div>
              <div className="social-media-images">
                <a href="https://vk.com/hypebeachnvkz" target="_blank">
                  <img src="images/vk.png" alt="" />
                </a>
                <a
                  href="https://www.instagram.com/hype_beach_?igsh=NTc4MTIwNjQ2YQ=="
                  target="_blank"
                >
                  <img src="images/instagram.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <label>
          Имя:{" "}
          <input
            type="text"
            //value={this.state.form.name}
            name="name"
            //onChange={this.handleChange}
          />
        </label>
        <label>
          Комментарий:{" "}
          <textarea
            name="comment"
            //value={this.state.form.comment}
            //onChange={this.handleChange}
          ></textarea>
        </label>
        <button 
        //onClick={this.addComment}
        >Добавить комментарий</button>
      </div>
    </div>
  );
});

export default Blog;
