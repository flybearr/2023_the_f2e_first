import "../styles/sponsorBox.scss";

export default function SponsorBox() {
  return (
    <div className="sponsor-wrap">
      <div className="sponsor-title">
        <div className="left-title"></div>
        <h1>喵星之友</h1>
        <div className="right-title"></div>
      </div>
      <div className="sponsorBox">
        <div className="sponsor-top">
          <h1>$600</h1>
          <h4>一次捐款金額</h4>
        </div>
        <div className="sponsor-dash"></div>
        <div className="sponsor-bottom">
          <h1>987</h1>
          <h4>捐款人數</h4>
        </div>
      </div>
    </div>
  );
}
