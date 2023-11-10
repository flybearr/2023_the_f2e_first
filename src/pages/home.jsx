import "../styles/pages/home.scss";
import Card from "../components/card/card";
import NextBtn from "../components/button/nextBtn";
import Btn from "../components/button/btn";
import DonateBox from "../components/donateBox";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="home-wrap">
      <div className="img-wrap">
        <img src="./image/cattext.png" alt="" />
      </div>
      <section className="home-banner">
        <h3>台灣的明天，喵先鋪路 !</h3>
        <h3>為喵星人，護台灣!</h3>
      </section>
      <section className="home-section1">
        <div className="section1-content-wrap">
          <h6>主張</h6>
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

      {/* <section className="home-section3"></section>
      <section className="home-section4"></section> */}
      <section className="home-section2">
        <h3>最新消息</h3>
        <Card />
        <NextBtn />
      </section>

      <section className="home-section3">
        <h3 className="">政策議題</h3>
        <div className="article-wrap">
          <div className="article">
            <div className="icon-wrap">
              <span className="material-symbols-outlined">
                volunteer_activism
              </span>
            </div>
            <h5>為毛孩子謀福利！</h5>
            <h5>推動寵物醫療保障方案</h5>
          </div>
          <div className="article">
            <div className="icon-wrap">
              <span className="material-symbols-outlined">deck</span>
            </div>
            <h5>打造休閒天堂！ </h5>
            <h5>推廣寵物休閒與娛樂場所</h5>
          </div>
          <div className="article">
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
        <div className="home-form-wrap">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="input-area">
              <label htmlFor="name">姓名</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="請輸入中文或英文姓名"
              />
            </div>
            <div className="input-area">
              <label htmlFor="mail">Email</label>
              <input
                type="text"
                name="mail"
                id="mail"
                placeholder="請輸入mail帳戶"
              />
            </div>
            <div className="input-area">
              <label htmlFor="phone">手機</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="請輸入十位數"
              />
            </div>
            <div className="input-area">
              <label htmlFor="suggestion">建言</label>
              <textarea
                className="suggestion"
                type="text"
                name="suggestion"
                id="suggestion"
                placeholder="請輸入你的建言"
              />
            </div>

            <Btn text={"送出"} />
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
