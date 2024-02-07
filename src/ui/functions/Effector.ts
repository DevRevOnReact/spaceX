import { createEvent, createStore } from "effector";

export interface IHeaderMenuItem {
    title: string
    link: string
  }
export const $menuValue = createStore<IHeaderMenuItem[]>([
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
  ])
export const setMenuValue = createEvent<any>()
$menuValue.on(setMenuValue, (_, val) => val);