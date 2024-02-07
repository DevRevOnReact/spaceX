import { IMajorListItem } from "../molecules/MajorList";
import "../styles/MajorListItem.css";
import Background from '../../../assets/major/list/background.svg'

export const MajorListItem = (params: IMajorListItem) => {

    return (
        <div className="MajorListItem" >
            <img src={Background} className={`MajorListItem__Back ${"MajorListItem__Back__" + params.id}`} alt="Background" />
            <div className="MajorListItem__headerTitle">
                {params.headerTitle}
            </div>
            <div className="MajorListItem__middleTitle">
                {params.middleTitle}
            </div>
            <div className="MajorListItem__footerTitle">
                {params.footerTitle}
            </div>
        </div>
    );
};
