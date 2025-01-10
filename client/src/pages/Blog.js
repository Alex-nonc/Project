import React from "react";
import { MAIN_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useState } from "react";

const Blog = observer(() => {
  const [comments_name, setName] = useState("");
  const [comments_comment, setComment] = useState("");
  return (
    <div>
      <div className="comments_blocks">
      <label className="lbl_comment_block">
          <label className="lbl_comment_block"></label>
          <p>
            <textarea
              className="textarea_comment_block"
              name="comment"
              //value={this.state.form.comment}
              //onChange={this.handleChange}
            ></textarea>
          </p>
        </label>
      </div>
      <div className="comment_user_block">
        <label className="lbl_comment_user_block">
          <label className="lbl_comment_user_block">Написать комментарий</label>
          <p>
            <textarea
              className="textarea_comment_user_block"
              name="comment"
              //value={this.state.form.comment}
              //onChange={this.handleChange}
            ></textarea>
          </p>
        </label>
        <button id="add_comment"
        //onClick={this.addComment}
        >
          Добавить комментарий
        </button>
      </div>
    </div>
  );
});

export default Blog;
