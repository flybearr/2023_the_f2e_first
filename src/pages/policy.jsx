import { usePageContext } from "../context/pageContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles/pages/policy.scss";
import DesktopNavBar from "../components/navBar/desktopNavBar";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Policy() {
  const { isMobile, link_to_page } = usePageContext();
  const nv = useNavigate();
  const content = [
    {
      content1: "為毛孩子謀福利！",
      content2: "推動寵物醫療保障方案",
      list: [
        "設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用",
        "提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力",
        "合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論",
      ],
    },
    {
      content1: "打造休閒天堂！",
      content2: "推廣寵物休閒與娛樂場所",
      list: [
        "建立寵物公園：每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園",
        "推廣寵物友善商家：鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫",
        "舉辦寵物活動和工作坊：與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等",
      ],
    },
    {
      content1: " 推廣寵物飼養教育",
      content2: "讓愛更加專業",
      list: [
        "建立寵物飼養教育中心：每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。",
        "推廣寵物飼養課程：與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。",
        "製作教育資料：出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識",
      ],
    },
  ];

  const PolicyCard = content.map((v, index) => {
    const titleNumber = index + 1;
    return (
      <div
        className="policy-content-wrap"
        data-aos="fade-up"
        data-aos-delay={index * 200}
        key={"policyList" + index}
      >
        <div className="policy-content-title">
          <div className="policy-tag-number">
            <h1 className="number">{titleNumber}</h1>
          </div>
          <div className="policy-decsribe">
            <h5>{v.content1} </h5>
            <h5>{v.content2}</h5>
          </div>
        </div>
        <div className="policy-content-list">
          <ol>
            {v.list.map((list, index2) => {
              const number = index2 + 1;
              return <li key={"insideList" + index2}>{number + "." + list}</li>;
            })}
          </ol>
        </div>
      </div>
    );
  });
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="policy-wrap">
      {isMobile ? (
        <div className="img-wrap" onClick={link_to_page(nv, "/")}>
          <img src="./image/cattext.png" alt="" />
        </div>
      ) : (
        <DesktopNavBar />
      )}
      <div className="policy-section">
        <div className="policy-title">
          <h2>政策議題</h2>
        </div>
        {PolicyCard}
      </div>
    </div>
  );
}
