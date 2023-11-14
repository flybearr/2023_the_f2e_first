import { createContext, useState, useContext, useEffect } from "react";
// import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
const PageContext = createContext({});
export default PageContext;
// eslint-disable-next-line react/prop-types
export const PageContextProvider = function ({ children }) {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const navBarToggle = () => {
    setNavBarOpen(!navBarOpen);
  };
  const link_to_page = (navigate, link) => () => {
    navigate(link);
    setNavBarOpen(false);
  };
  return (
    <PageContext.Provider
      value={{ navBarOpen, navBarToggle, link_to_page, isMobile }}
    >
      {children}
    </PageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePageContext = () => {
  return useContext(PageContext);
};
