import "../../styles/navBar.scss";
import { useNavigate } from "react-router-dom";
import { navBarLinks } from "../../data/links";
export default function DesktopNavBar() {
  const navigate = useNavigate();
  const linkFn = (link) => () => {
    navigate(link);
  };
  const linksDom = navBarLinks.map((v, i) => {
    if (i === 0) return;
    return (
      <h6 key={v + i} onClick={linkFn(v.link)}>
        {v.title}
      </h6>
    );
  });
  return (
    <div className="desktop-navbar">
      <div className="desktop-img-wrap" onClick={linkFn("/")}>
        <img src="./image/cattext.png" alt="" />
      </div>
      <div className="desktop-link-wrap">{linksDom}</div>
    </div>
  );
}
