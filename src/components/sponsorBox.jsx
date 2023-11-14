import "../styles/sponsorBox.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
export default function SponsorBox({ title, money, people }) {
  const formatMoney = (str) => {
    return String(str).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    // Aos.init();
  }, []);
  return (
    // <div className="sponsor-wrap">
    <>
      <div className="sponsor-title">
        <div className="left-title"></div>
        <h3>{title}</h3>
        <div className="right-title"></div>
      </div>
      <div className="sponsorBox">
        <div className="sponsor-top">
          <h4>{formatMoney(money)}</h4>
          <h5>每次捐款金額</h5>
        </div>
        <div className="sponsor-dash"></div>
        <div className="sponsor-bottom">
          <h4>{people}</h4>
          <h5>贊助人數</h5>
        </div>
      </div>
    </>
  );
}
