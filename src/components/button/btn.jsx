import { Fragment } from "react";
import { useContext } from "react";
import PageContext from "../../context/pageContext";
import "../../styles/button/btn.scss";
// eslint-disable-next-line react/prop-types
export default function Btn({ text }) {
  const { link_to_page } = useContext(PageContext);
  return (
    <Fragment>
      <button className="btn" onClick={link_to_page("/donate")}>
        <h6>{text}</h6>
        <span className="material-symbols-outlined">arrow_right</span>
      </button>
    </Fragment>
  );
}
