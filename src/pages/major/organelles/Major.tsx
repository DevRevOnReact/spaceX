import { MajorLeft } from "../molecules/MajorLeft";
import { MajorList } from "../molecules/MajorList";
import "../styles/Major.css";
export const Major = () => {
  return (
    <div className="Major">
      <MajorLeft />
      <MajorList />
    </div>
  );
};
