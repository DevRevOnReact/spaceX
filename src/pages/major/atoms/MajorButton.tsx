import { useState } from "react";
import "../styles/MajorButton.css";
import Button from '../../../assets/major/Button.svg'
export interface IMajorButton {
  title: string
  link: string
}
export const MajorButton = () => {
  const [value, setValue] = useState<IMajorButton>({ title: "Начать путешествие", link: "" })
  return (
    <div className="MajorButton">
      <img className="MajorButton__Button" src={Button} alt="Button" />
      {value.title}
    </div>
  );
};
