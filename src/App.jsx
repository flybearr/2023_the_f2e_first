import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PageContextProvider } from "./context/pageContext";
import Layout from "./layout/layout";
import Home from "./pages/home";
import Active from "./pages/active";
import Policy from "./pages/policy";
import Donate from "./pages/donate";
function App() {
  return (
    // <NavBar />

    <PageContextProvider>
      <BrowserRouter basename="/2023_the_f2e_first">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/active" element={<Active />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/donate" element={<Donate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageContextProvider>
  );
}

export default App;
