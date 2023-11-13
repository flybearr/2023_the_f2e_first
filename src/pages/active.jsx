import "../styles/pages/active.scss";
import DesktopNavBar from "../components/navBar/desktopNavBar";
import Card from "../components/card/card";
import DatePickers from "../components/button/datePicker";
import Search from "../components/button/search";
import Navigator from "../components/navigator";
import { usePageContext } from "../context/pageContext";
export default function Active() {
  const { isMobile } = usePageContext();
  const tag = ["人數", "收藏", "分享"];
  const cardContent = [
    {
      title1: "參與台北寵物論壇",
      title2: "爭取貓咪友善環境",
      content:
        "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    },
    {
      title1: "掃街模式開啟！",
      title2: " 帶著你的貓耳，來和我一起走！",
      content:
        "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。",
    },
    {
      title1: "收容所模特兒大比拼！",
      content:
        "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    },
  ];
  const cardWrapDom = (
    <div className="active-desktop-card-wrap">
      {cardContent.map((v, i) => {
        return (
          <div key={"desktop-card-wrap" + i}>
            <Card
              title1={v.title1}
              title2={v?.title2}
              content={v.content}
              imgNumber={i + 1}
            />
          </div>
        );
      })}
    </div>
  );

  const markDom = tag.map((v, i) => {
    return (
      <div className="mark-number" key={"active-number" + i}>
        <h1 className="active-mark-number">{i + 1}</h1>
        <span className="active-mark-title">{v}</span>
      </div>
    );
  });
  return (
    <div className="active-wrap">
      <section className="active-banner">
        {isMobile ? (
          <div className="img-wrap">
            <img src="./image/cattext.png" alt="" />
          </div>
        ) : (
          <>
            <DesktopNavBar />
            <div className="active-news">
              <h2>最新消息</h2>
              <DatePickers />
              <Search />
            </div>
          </>
        )}
        <div className="mark-number-wrap">{markDom}</div>
      </section>

      <section className="active-section2">
        {isMobile ? (
          <div className="active-news">
            <h2>最新消息</h2>
            <DatePickers />
            <Search />
          </div>
        ) : (
          <></>
        )}

        {cardWrapDom}
      </section>
      <Navigator />
    </div>
  );
}
