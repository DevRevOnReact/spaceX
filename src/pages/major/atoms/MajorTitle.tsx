import { useState } from "react";
import "../styles/MajorTitle.css";
export interface IMajorTitle {
  title: string
  subTitle: string
}
export const MajorTitle = () => {
  const [value, setValue] = useState<IMajorTitle>({ title: "Путешествие", subTitle: "На красную планету" })
  return (
    <div className="MajorTitle">
      <div className="MajorTitle__title">
        {value.title}
      </div>
      <div className="MajorTitle__subTitle">
        {value.subTitle}
      </div>
    </div>
  );
};
