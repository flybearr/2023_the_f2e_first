import { Outlet } from "react-router-dom";
import { useContext } from "react";
import PageContext from "../context/pageContext";
import { useMediaQuery } from "react-responsive";
import MobileNavBar from "../components/navBar/mobileNavBar";
import DesktopNavBar from "../components/navBar/desktopNavBar";

export default function Layout() {
  const { navBarOpen, navBarToggle, link_to_page } = useContext(PageContext);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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
          <div className="img-wrap">
            <img src="./image/cattext.png" alt="" />
          </div>
        </>
      ) : (
        <DesktopNavBar />
      )}
      <Outlet />
    </>
  );
}
