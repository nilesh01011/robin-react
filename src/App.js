import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CustomerMaster1 from "./pages/CustomerMaster1";
import AccordionOpen from "./pages/AccordionOpen";
import Accordion from "./pages/Accordion";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/accordion-open":
        title = "";
        metaDescription = "";
        break;
      case "/accordion":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CustomerMaster1 />} />
      <Route path="/accordion-open" element={<AccordionOpen />} />
      <Route path="/accordion" element={<Accordion />} />
    </Routes>
  );
}
export default App;
