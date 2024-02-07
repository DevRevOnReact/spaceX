import "../styles/MajorLeft.css";
import { MajorButton } from "../atoms/MajorButton";
import { MajorTitle } from "../atoms/MajorTitle";
export const MajorLeft = () => {
  return (
      <div className="MajorLeft">
        <MajorTitle />
        <MajorButton />
      </div>
  );
};
