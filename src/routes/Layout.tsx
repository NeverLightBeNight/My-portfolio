import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { home, about, skills, contacts } from "./path.json";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Skillspage from "./pages/Skillspage";
import Contactspage from "./pages/Contactspage";

function Layout() {
  return (
    <Routes>
      <Route path={home} element={<Homepage />} />
      <Route path={about} element={<Aboutpage />} />
      <Route path={skills} element={<Skillspage />} />
      <Route path={contacts} element={<Contactspage />} />
    </Routes>
  );
}

export default Layout;
