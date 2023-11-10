import { navBarLinks } from "../data/links";
import { useNavigate } from "react-router-dom";
import "../styles/footer.scss";
export default function Footer() {
  const navigate = useNavigate();
  const linkFn = (link) => () => {
    navigate(link);
  };
  const linksDom = navBarLinks.map((v, i) => {
    return (
      <span key={v + i} onClick={linkFn(v.link)}>
        {v.title}
      </span>
    );
  });

  const detailText = [
    { icon: "location_on", text: "喵星區，毛茸茸大道88號，喵喵大樓3樓" },
    { icon: "mail", text: "linmeow" },
    { icon: "phone", text: "(02) 888-5678" },
  ];
  const footerDetailDom = detailText.map((v, i) => (
    <div className="footer-detail" key={"footer" + i}>
      {/* <span className="material-symbols-outlined">{v.icon}</span> */}
      <p>{v.text}</p>
    </div>
  ));
  return (
    <div className="footer">
      <div className="footer-row1">{linksDom}</div>
      <div className="footer-dash"></div>
      {footerDetailDom}
      <div className="copyright">
        <p>© 2023 [立委候選人姓名] 版權所有。</p>
      </div>
    </div>
  );
}
