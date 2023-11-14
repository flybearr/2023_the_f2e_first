import "../styles/pages/donate.scss";
import { useEffect } from "react";
import { usePageContext } from "../context/pageContext";
import { useNavigate } from "react-router";
import DesktopNavBar from "../components/navBar/desktopNavBar";
import Btn from "../components/button/btn";
import SponsorBox from "../components/sponsorBox";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Donate() {
  const { isMobile, link_to_page } = usePageContext();
  const nv = useNavigate();
  const donateArray = [
    { title: "喵星人之友", money: "NT$600", people: "9975" },
    { title: "喵星大使", money: "NT$6000", people: "1235" },
    { title: "喵星傳奇", money: "NT$60000", people: "7342" },
    { title: "喵星自我", money: "自訂", people: "0" },
  ];
  const formatMoney = (str) => {
    return String(str).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="donate-wrap">
      <section className="donate-banner-bg">
        {isMobile ? (
          <div className="img-wrap" onClick={link_to_page(nv, "/")}>
            <img src="./image/cattext.png" alt="" />
          </div>
        ) : (
          <DesktopNavBar />
        )}
        <div className="donate-money-tag">
          <h2 className="donate-total-money">{formatMoney(962323)}</h2>
          <span className="donate-total-text">總金額</span>
        </div>

        {isMobile ? (
          <></>
        ) : (
          <div className="donate-section2-title fadeinnnn">
            <h2> 您的小筆捐款是</h2>
            <h2> 每隻毛孩</h2>
            <h2> 未來的大大動力！</h2>
            <Btn text={"前往捐款"} />
          </div>
        )}
      </section>
      <section className="donate-section2">
        {isMobile ? (
          <div
            className="donate-section2-title"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <h4> 您的小筆捐款是</h4>
            <h4> 每隻毛孩</h4>
            <h4> 未來的大大動力！</h4>
            <Btn text={"前往捐款"} />
          </div>
        ) : (
          <></>
        )}

        <div className="donatePage-sponsor-wrap">
          {donateArray.map((v, index) => {
            // const left_right = index % 2 === 0 ? "fade-right" : "fade-left";
            return (
              <div
                className="sponsor-wrap"
                // data-aos={left_right}
                key={"sponsorBox" + index}
              >
                <SponsorBox
                  title={v.title}
                  money={v.money}
                  people={v.people}
                  // side={index}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
