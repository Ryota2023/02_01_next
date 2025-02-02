import React from "react";
import styles from "./style.module.scss";

type PostProps = {
  id: number;
  name: string;
  date: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ date, content, name }) => {
  return (
    <div className={styles.post}>
      <p>名前が入る予定</p>
      <p>{date}</p>
      <p>{content}</p>
      <p>{name}</p>
      <p>日付が入る予定</p>
      <p>登録されたデータを表示する予定</p>
    </div>
  );
};

export default Post;