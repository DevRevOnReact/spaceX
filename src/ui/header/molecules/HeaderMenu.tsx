import { useState } from "react";
import "../styles/HeaderMenu.css";
import { HeaderMenuItem } from "../atoms/HeaderMenuItem";
export interface IHeaderMenuItem {
  title: string
  link: string
}
export const HeaderMenu = () => {
  const [value, setValue] = useState<IHeaderMenuItem[]>([
    {
      title: "Главная",
      link: "/"
    },
    {
      title: "Технология",
      link: "/"
    },
    {
      title: "График полетов",
      link: "/"
    },
    {
      title: "Гарантии",
      link: "/"
    },
    {
      title: "О компании",
      link: "/"
    },
    {
      title: "Контакты",
      link: "/"
    }
  ]
  )
  return (
    <div className="HeaderMenu">
      {
        value && value.map((e: IHeaderMenuItem) =>
          <HeaderMenuItem title={e.title} link={e.link} />
        )
      }
    </div>
  );
};
