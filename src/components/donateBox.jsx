import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DonateBox() {
  //   const isDeskTop = useMediaQuery({ query: "(max-width: 768px)" });

  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%", // 啟用 centerMode
    className: "center",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // 啟用 centerMode
        },
      },
    ],
  };
  const donateArray = [
    { money: "NT$600", people: "9975" },
    { money: "NT$6000", people: "1235" },
    { money: "NT$60000", people: "7342" },
    { money: "自訂", people: "0" },
  ];
  const boxDom = donateArray.map((v, i) => (
    <div className="donate-banner-wrap" key={"donateBox" + i}>
      <div className="donate-banner">
        <h3>喵星人之友</h3>
        <div className="donate-text-area">
          <div className="donate-text">
            <h2>{v.money} </h2>
            <h6>每次捐款金額 </h6>
          </div>
          <div className="donate-text">
            <h2>{v.people} </h2>
            <h6>贊助人數 </h6>
          </div>
        </div>
      </div>
    </div>
  ));
  return <Slider {...setting}>{boxDom}</Slider>;
}
