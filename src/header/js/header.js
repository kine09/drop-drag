import { useState, useEffect } from "react";
import logo from "../img/logo-home.jpg";
import { FaBeer, Fa500Px } from "react-icons/fa";
import { HeaderItemChild } from "./fcChild";

function Header() {
  const [status, setStatus] = useState(false);

  function handleOpenMenu(e) {
    setStatus(!status);
  }
  return (
    <header id="header">
      <div className="header__item header--menu">
        <Fa500Px />
      </div>
      <div className="header__item header--logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="header__item header--nav">
        <div className="nav__item" onClick={handleOpenMenu} id="spaceWork">
          Các không gian làm việc
          {status && (
            <HeaderItemChild itemChildHeader="Các Không gian làm việc" />
          )}
        </div>
        <div className="nav__item" onClick={handleOpenMenu} id="nearBy">
          <p>Gần đây </p>
          {status && <HeaderItemChild itemChildHeader="Bảng gần đây" />}
        </div>
        <div className="nav__item" onClick={handleOpenMenu} id="mark">
          <p>Đã đánh dấu sao</p>
        </div>
        <div className="nav__item" onClick={handleOpenMenu} id="example">
          <p>Mẫu</p>
        </div>
        <div className="nav__item" onClick={handleOpenMenu} id="newModal">
          <p>Tạo mới</p>
        </div>
      </nav>
      <div className="header__item header--box">
        <div className="box__search">
          <input type="text" placeholder="Tìm Kiếm" />
        </div>
      </div>
    </header>
  );
}
export default Header;
