import { HeaderLogo } from "../molecules/HeaderLogo";
import { HeaderMenu } from "../molecules/HeaderMenu";
import { HeaderMobileMenu } from "../molecules/HeaderMobileMenu";
import "../styles/Header.css";

export const Header = () => {

  return (
    <div className="Header">
      <div className="Header__Actual">
        <HeaderLogo />
        <HeaderMenu />
        <HeaderMobileMenu />
      </div>
    </div>
  );
};
