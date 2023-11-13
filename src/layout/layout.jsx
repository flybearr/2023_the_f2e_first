import { Outlet } from "react-router-dom";
import { useContext } from "react";
import PageContext from "../context/pageContext";

import MobileNavBar from "../components/navBar/mobileNavBar";

import Footer from "../components/footer";

export default function Layout() {
  const { navBarOpen, navBarToggle, link_to_page, isMobile } =
    useContext(PageContext);

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
