import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/pages/home.scss";
import Card from "../components/card/card";
import NextBtn from "../components/button/nextBtn";
import Btn from "../components/button/btn";
import DonateBox from "../components/donateBox";
import DesktopNavBar from "../components/navBar/desktopNavBar";
import Aos from "aos";
import "aos/dist/aos.css";
import { usePageContext } from "../context/pageContext";
import { useEffect } from "react";

export default function Home() {
  const { isMobile } = usePageContext();
  // const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required(),
    mail: yup.string().required(),
    phone: yup
      .string()
      .required()
      .test("len", "電話號碼需10碼", (val) => val && val.length === 10),
    suggestion: yup.string(),
  });
  const textInput = [
    {
      name: "name",
      defaultValue: "",
      title: "姓名",
      placeholder: "請輸入中文或英文姓名",
      type: "text",
    },
    {
      name: "mail",
      title: "信箱",
      placeholder: "請輸入mail帳戶",
      type: "mail",
    },
    {
      name: "phone",
      title: "電話",
      placeholder: "請輸入十位數",
      type: "text",
    },
    {
      name: "suggestion",
      title: "建言",
      placeholder: "請輸入你的建言",
      type: "text",
    },
  ];
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      mail: "",
      phone: "",
      suggestion: "",
    },
  });
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    //打api
  };
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
  const cardWrapDom = isMobile ? (
    <Card
      title1={cardContent[0].title1}
      title2={cardContent[0]?.title2}
      content={cardContent[0].content}
      imgNumber={1}
    />
  ) : (
    <div className="desktop-card-wrap">
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
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="home-wrap">
      <section className="home-banner">
        {isMobile ? (
          <>
            <div className="img-wrap img-wrap-page">
              <img src="./image/cattext.png" alt="" />
            </div>
            <h3>台灣的明天，喵先鋪路 !</h3>
            <h3>為喵星人，護台灣!</h3>
            <div className="home-img-wrap">
              <img src="./image/cattext2.png" alt="" />
            </div>
          </>
        ) : (
          <>
            <DesktopNavBar />
            <h1>台灣的明天，喵先鋪路 !</h1>
            <h1>為喵星人，護台灣!</h1>
          </>
        )}
      </section>
      <section className="home-section1">
        {isMobile ? (
          <></>
        ) : (
          <div className="home-img-wrap">
            <img src="./image/cattext2.png" alt="" />
          </div>
        )}
        <div className="section1-content-wrap">
          <h4>主張</h4>
          <div className="section1-line"></div>
          <h6>
            我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
            GDP 經濟帶來巨大效益。
          </h6>
          <br />
          <h6>
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </h6>
        </div>
      </section>
      <section
        className="home-section2"
        data-aos="slide-left"
        data-aos-anchor-placement="top-center"
      >
        <h3>最新消息</h3>
        {cardWrapDom}
        <NextBtn />
      </section>

      <section className="home-section3">
        <h3 className="">政策議題</h3>
        <div className="article-wrap">
          <div
            className="article"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={isMobile ? "0" : "0"}
          >
            <div className="icon-wrap">
              <span className="material-symbols-outlined">
                volunteer_activism
              </span>
            </div>
            <h5>為毛孩子謀福利！</h5>
            <h5>推動寵物醫療保障方案</h5>
          </div>
          <div
            className="article"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={isMobile ? "0" : "200"}
          >
            <div className="icon-wrap">
              <span className="material-symbols-outlined">deck</span>
            </div>
            <h5>打造休閒天堂！ </h5>
            <h5>推廣寵物休閒與娛樂場所</h5>
          </div>
          <div
            className="article"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={isMobile ? "0" : "400"}
          >
            <div className="icon-wrap">
              <span className="material-symbols-outlined">
                medical_services
              </span>
            </div>
            <h5>推廣寵物飼養教育 </h5>
            <h5>讓愛更加專業</h5>
          </div>
        </div>
        <NextBtn />
        <div className="donate-title">
          <h3>您的小筆捐款 </h3>
          <h3>是每隻毛孩</h3>
          <h3> 未來的大大動力！</h3>
          <h5>目前小額贊助總金額：987,655,873</h5>
        </div>
        <DonateBox />
        <Btn text={"前往捐款"} />
        <div className="home-form-title">
          {isMobile ? (
            <div className="home-form-title-content">
              <h2>您的聲音，</h2>
              <h2> 我們的行動！</h2>
              <h4>
                親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。
                無論大小事，我都誠摯希望聽到您的建議。
                分享您的想法，一同為我們的未來打造更美好！
              </h4>
            </div>
          ) : (
            <>
              <div className="home-form-title-left-wrap">
                <div className="home-form-title-left"></div>
              </div>
              <div className="home-form-title-content">
                <h2>您的聲音， 我們的行動！</h2>
                <h6>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。</h6>
                <h6>無論大小事，我都誠摯希望聽到您的建議。</h6>
                <h6>分享您的想法，一同為我們的未來打造更美好！</h6>
              </div>
              <div className="home-form-title-right-wrap">
                <div className="home-form-title-right"></div>
              </div>
            </>
          )}
        </div>
        <div className="home-form-wrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="input-area">
              <label htmlFor="name">姓名</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="請輸入中文或英文姓名"
                required
              />
            </div>
            <div className="input-area">
              <label htmlFor="mail">Email</label>
              <input
                type="mail"
                name="mail"
                id="mail"
                placeholder="請輸入mail帳戶"
                required
              />
            </div>
            <div className="input-area">
              <label htmlFor="phone">手機</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="請輸入十位數"
                required
              />
            </div> */}
            {textInput.map((v, i) => {
              return (
                <div className="input-area" key={v.title}>
                  <label htmlFor={v.name}>{v.title}</label>
                  <Controller
                    name={v.name}
                    control={control}
                    render={({ field }) => {
                      const DOM =
                        i === 3 ? (
                          <textarea
                            type={v.type}
                            placeholder={v.placeholder}
                            id={v.name}
                            {...field}
                            className="suggestion"
                          />
                        ) : (
                          <input
                            type={v.type}
                            placeholder={v.placeholder}
                            id={v.name}
                            {...field}
                          />
                        );
                      return DOM;
                    }}
                  />
                </div>
              );
            })}
            {/* <div className="input-area">
              <label htmlFor="suggestion">建言</label>
              <textarea
                className="suggestion"
                type="text"
                name="suggestion"
                id="suggestion"
                placeholder="請輸入你的建言"
              />
            </div> */}
            <p style={{ color: "red" }}>{errors?.phone?.message}</p>
            <Btn text={"送出"} link={false} />
          </form>
        </div>
      </section>
    </div>
  );
}
