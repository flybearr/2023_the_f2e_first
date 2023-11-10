import "../../styles/card/card.scss";
export default function Card() {
  return (
    <div className="card-wrap">
      <div className="card-title">
        <div className="card-tag-number">
          <h1 className="number">1</h1>
          <span className="date">12/26</span>
        </div>
        <div className="title-decsribe">
          <h5>參與台北寵物論壇 </h5>
          <h5>爭取貓咪友善環境 </h5>
        </div>
      </div>
      <div className="card-img-wrap">
        <img src="./image/cardImg.jpeg" alt="catBanner" />
      </div>
      <div className="card-bottom">
        <h6>
          炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
          VIP 休憩空間。
        </h6>
      </div>
    </div>
  );
}
