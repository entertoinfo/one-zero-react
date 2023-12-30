import "./header.css";
import logoImg from "../../../image/icons/logo.svg";
import Logo from "./Logo";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
            <Logo />
          <div className="header__name-game">Zero-One</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
