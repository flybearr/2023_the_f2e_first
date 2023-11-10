import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/navBar.scss";
import { navBarLinks } from "../../data/links";
// eslint-disable-next-line react/prop-types
export default function MobileNavBar({ isOpen, toggle, link_to_page }) {
  const divClassName = isOpen ? "navBar" : "navBar navbar-move-left ";
  const navigate = useNavigate();
  const LinksDom = navBarLinks.map((v, i) => {
    if (i === 0) return;
    return (
      <Fragment key={v + i}>
        <h3 onClick={link_to_page(navigate, v.link)}>{v.title}</h3>
      </Fragment>
    );
  });
  return (
    <div className={divClassName}>
      <div className="img-wrap">
        <img
          src="./image/cattext.png"
          alt=""
          onClick={link_to_page(navigate, "/")}
        />
        <span
          className="material-symbols-outlined navbar-close"
          onClick={toggle}
        >
          close
        </span>
      </div>
      <div className="navBar-links-wrap">{LinksDom}</div>
    </div>
  );
}
