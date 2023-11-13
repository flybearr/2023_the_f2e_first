import { usePageContext } from "../context/pageContext";
import DesktopNavBar from "../components/navBar/desktopNavBar";
import "../styles/pages/policy.scss";
export default function Policy() {
  const { isMobile } = usePageContext();
  const content = [
    { content1: "為毛孩子謀福利！", content2: "推動寵物醫療保障方案" },
    { content1: "", content2: "" },
    { content1: "", content2: "" },
  ];
  return (
    <div className="policy-wrap">
      {isMobile ? (
        <div className="img-wrap">
          <img src="./image/cattext.png" alt="" />
        </div>
      ) : (
        <DesktopNavBar />
      )}
      <div className="policy-section">
        <div className="policy-title">
          <h2>政策議題</h2>
        </div>
      </div>
      <div className="policy-content-wrap">
        <div className="policy-content-title">
          <div className="policy-tag-number">
            <h1 className="number">1</h1>
          </div>
          <div className="policy-decsribe">
            <h5>為毛孩子謀福利！ </h5>
            <h5>推動寵物醫療保障方案</h5>
          </div>
        </div>
        {/* <div className="policy-content-text">
          <ol>
            <li>
              設立寵物醫療基金：每年撥款新台幣 10
              億元，專款專用於支援家庭寵物的醫療費用
            </li>
            <li>
              設立寵物醫療基金：每年撥款新台幣 10
              億元，專款專用於支援家庭寵物的醫療費用
            </li>
          </ol>
        </div> */}
      </div>
    </div>
  );
}
