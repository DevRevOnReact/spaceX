import { useState } from "react";
import { MajorListItem } from "../atoms/MajorListItem";
import "../styles/MajorList.css";
export interface IMajorListItem {
  headerTitle: string
  middleTitle: string
  footerTitle: string
  id:number
}
export const MajorList = () => {
  const [value, setValue] = useState<IMajorListItem[]>(
    [
      {
        headerTitle: "мы",
        middleTitle: "1",
        footerTitle: "на рынке",
        id:0
      },
      {
        headerTitle: "гарантируем",
        middleTitle: "50%",
        footerTitle: "безопасность",
        id:1
      },
      {
        headerTitle: "календарик за",
        middleTitle: "2001",
        footerTitle: "в подарок",
        id:2
      },
      {
        headerTitle: "путешествие",
        middleTitle: "597",
        footerTitle: "дней",
        id:3
      }
    ]
  )
  return (
    <div className="MajorList">
      {
        value && value.map((e: IMajorListItem,id:number) =>
          <MajorListItem headerTitle={e.headerTitle} middleTitle={e.middleTitle} footerTitle={e.footerTitle} id={id}/>
        )
      }
    </div>
  );
};
