import { Fragment } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PageContext from "../../context/pageContext";
import "../../styles/button/btn.scss";
// eslint-disable-next-line react/prop-types
export default function Btn({ text, link = true }) {
  const { link_to_page } = useContext(PageContext);
  const navigate = useNavigate();

  return (
    <Fragment>
      <button
        className="btn"
        onClick={link ? link_to_page(navigate, "/donate") : void 0}
      >
        <h5>{text}</h5>
        <span className="material-symbols-outlined">arrow_right</span>
      </button>
    </Fragment>
  );
}
