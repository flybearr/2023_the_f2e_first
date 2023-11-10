import { Fragment } from "react";
import "../../styles/button/search.scss";
export default function Search() {
  return (
    <Fragment>
      <div className="custom-container">
        <input
          className="search"
          type="text"
          name=""
          id=""
          placeholder="請輸入關鍵字"
        />
        <span className="material-symbols-outlined search-icon">search</span>
      </div>
    </Fragment>
  );
}
