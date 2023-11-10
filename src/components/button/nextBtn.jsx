import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PageContext from "../../context/pageContext";
import "../../styles/button/nextBtn.scss";
export default function NextBtn() {
  const navigate = useNavigate();
  const { link_to_page } = useContext(PageContext);
  return (
    <div onClick={link_to_page(navigate, "/active")}>
      <div className="nextBtn-wrap">
        MORE
        <span className="material-symbols-outlined">arrow_right</span>
      </div>
    </div>
  );
}
