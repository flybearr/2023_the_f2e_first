import { Outlet } from "react-router-dom";
import { useContext } from "react";
import PageContext from "../context/pageContext";
import { useMediaQuery } from "react-responsive";
import MobileNavBar from "../components/navBar/mobileNavBar";

export default function Layout() {
  const { navBarOpen, navBarToggle, link_to_page } = useContext(PageContext);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile ? (
        <MobileNavBar
          isOpen={navBarOpen}
          toggle={navBarToggle}
          link_to_page={link_to_page}
        />
      ) : (
        ""
      )}
      <div className="navBar-icon" onClick={navBarToggle}>
        <span className="material-symbols-outlined">menu</span>
      </div>
      <Outlet />
    </>
  );
}
