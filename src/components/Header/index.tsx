// rafceと入力後にタブキーを押します🤗
import React from "react";

// style.module.scssを読み込むには
// importというものを使い、ファイルを紐づける必要があります🤗

import style from "./style.module.scss";
import Link from "next/link";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

const Header = () => {
  return (
    <div className={style.header}>
      <ul>
        <li>
          <Link href={"/login"}>
          <LoginRoundedIcon />
          ログイン
          </Link>
        </li>
        <li>
          <Link href={"/signup"}>登録</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;