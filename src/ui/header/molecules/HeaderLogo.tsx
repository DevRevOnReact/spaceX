import { useState } from "react";
import "../styles/HeaderLogo.css";
import DefaultLogo from '../../../assets/header/logo/Logo.png'
interface IHeaderLogo {
  image: string
}
export const HeaderLogo = () => {
  const [value, setValue] = useState<IHeaderLogo>({ image: DefaultLogo })
  return (
    <div className="HeaderLogo__General" >
      <img className="HeaderLogo" src={value.image} alt="Logo" />
      <div className="HeaderLogo__border HeaderLogo__TopLeft"></div>
      <div className="HeaderLogo__border HeaderLogo__TopRight"></div>
      <div className="HeaderLogo__border HeaderLogo__BottomLeft"></div>
      <div className="HeaderLogo__border HeaderLogo__BottomRight"></div>
    </div>
  );
};
