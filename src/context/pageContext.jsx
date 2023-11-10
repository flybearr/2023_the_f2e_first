import { createContext, useState } from "react";
const PageContext = createContext({});
export default PageContext;
// eslint-disable-next-line react/prop-types
export const PageContextProvider = function ({ children }) {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const navBarToggle = () => {
    setNavBarOpen(!navBarOpen);
  };
  const link_to_page = (navigate, link) => () => {
    navigate(link);
    navBarToggle();
  };
  return (
    <PageContext.Provider value={{ navBarOpen, navBarToggle, link_to_page }}>
      {children}
    </PageContext.Provider>
  );
};
