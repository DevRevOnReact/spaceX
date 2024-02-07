import { NavLink } from "react-router-dom";
import "../styles/HeaderMenuItem.css";
import { IHeaderMenuItem } from "../../functions/Effector";

export const HeaderMenuItem = (params: IHeaderMenuItem) => {
  return (
    <NavLink to={params.link} className="HeaderMenuItem">
      {params.title}
    </NavLink>
  );
};
