import "../../styles/navBar.scss";
import { useNavigate } from "react-router-dom";
import { navBarLinks } from "../../data/links";
export default function DesktopNavBar() {
  const navigate = useNavigate();
  const linkFn = (link) => () => {
    navigate(link);
  };
  const linksDom = navBarLinks.map((v, i) => {
    return (
      <h4 key={v + i} onClick={linkFn(v.link)}>
        {v.title}
      </h4>
    );
  });
  return (
    <div className="desktop-navbar">
      <div className="desktop-img-wrap">
        <img src="./image/cattext.png" alt="" />
      </div>
      <div className="desktop-link-wrap">{linksDom}</div>
    </div>
  );
}
