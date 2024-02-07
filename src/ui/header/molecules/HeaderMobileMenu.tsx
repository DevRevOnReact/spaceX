import "../styles/HeaderMobileMenu.css";
import { HeaderMenuItem } from "../atoms/HeaderMenuItem";
import { $menuValue, IHeaderMenuItem } from "../../functions/Effector";
import { useStore } from "effector-react";
import { useState } from "react";
import Icon from '../../../assets/header/menu/Icon.svg'
import { useWindowWidth } from "@react-hook/window-size";
export const HeaderMobileMenu = () => {
  const onlyWidth = useWindowWidth()
  const menuValue = useStore($menuValue);
  const [click, setClick] = useState<boolean>(false)
  return (
    <>
      <img src={Icon} alt="Icon" className="HeaderMobileMenu__Icon" onClick={() => { setClick(!click) }} style={click ? { opacity: "1" } : { opacity: "0.6" }}/>
      {onlyWidth < 1170 &&
        <div className="HeaderMobileMenu" style={click ? { display: "flex" } : { display: "none" }}>
          {
            menuValue && menuValue.map((e: IHeaderMenuItem) =>
              <HeaderMenuItem title={e.title} link={e.link} />
            )
          }
        </div>
      }
    </>
  );
};
