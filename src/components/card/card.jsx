import "../../styles/card/card.scss";
// eslint-disable-next-line react/prop-types
export default function Card({ title1, title2, content, imgNumber }) {
  return (
    <div className="card-wrap">
      <div className="card-title">
        <div className="card-tag-number">
          <h1 className="number">{imgNumber}</h1>
          <span className="date">12/26</span>
        </div>
        <div className="title-decsribe">
          <h5>{title1} </h5>
          <h5>{title2} </h5>
        </div>
      </div>
      <div className="card-img-wrap">
        <img src={`./image/cardImg${imgNumber}.jpeg`} alt="catBanner" />
        <div className="touch-bar">
          {/* {favorite} */}
          <span className="material-icons">favorite</span>
          <span className="material-symbols-outlined">share</span>
        </div>
      </div>
      <div className="card-bottom">
        <h6>{content}</h6>
      </div>
    </div>
  );
}
