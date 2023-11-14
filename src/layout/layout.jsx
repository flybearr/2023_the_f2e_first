import { Outlet, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import PageContext from "../context/pageContext";
import MobileNavBar from "../components/navBar/mobileNavBar";
import Footer from "../components/footer";

export default function Layout() {
  const { navBarOpen, navBarToggle, link_to_page, isMobile } =
    useContext(PageContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return (
    <>
      {isMobile ? (
        <>
          <div className="navBar-icon" onClick={navBarToggle}>
            <span className="material-symbols-outlined">menu</span>
          </div>
          <MobileNavBar
            isOpen={navBarOpen}
            toggle={navBarToggle}
            link_to_page={link_to_page}
          />
        </>
      ) : (
        <></>
      )}

      <Outlet />
      <Footer />
    </>
  );
}
