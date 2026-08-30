import { Menu, X } from "lucide-react";
import useOpenBurgerMenu from "../../store/useOpenBurgerMenu";
import { Link, NavLink } from "react-router-dom";
import { home, about, skills, contacts } from "../../routes/path.json";

function Navbar() {
  const isBurgerMenu = useOpenBurgerMenu((state) => state.isBurgerMenu);
  const toggleBurgerMenu = useOpenBurgerMenu((state) => state.toggleBurger);
  const closeBurgerMenu = useOpenBurgerMenu((state) => state.closeBurger);

  const styleLi =
    "border px-3 py-1 rounded-md cursor-pointer hover:bg-white/10 hover:scale-[1.1] transition-all";

  return (
    <nav className="sticky top-0 left-0 w-full flex justify-between items-center px-4 py-4 border-b border-gray-400 bg-bgBody z-100">
      <Link className="text-2xl font-semibold tracking-[2px]" to={home}>Portfolio</Link>
      <ul className="relative hidden gap-4 md:flex items-center">
        <NavLink to={home} className={styleLi}>
          Home
        </NavLink>
        <NavLink to={about} className={styleLi}>
          About
        </NavLink>
        <NavLink to={skills} className={styleLi}>
          Skills
        </NavLink>
        <NavLink to={contacts} className={styleLi}>
          Contacts
        </NavLink>
      </ul>
      <div className="md:hidden" onClick={toggleBurgerMenu}>
        {isBurgerMenu ? <X /> : <Menu />}
      </div>
      {isBurgerMenu && (
        <ul className="absolute top-16.5 z-100 p-4 bg-bgBody left-0 w-full flex bg- flex-col gap-3 md:hidden">
          <NavLink
            to={home}
            onClick={closeBurgerMenu}
            className={`${styleLi} text-2xl`}
          >
            Home
          </NavLink>
          <NavLink
            to={about}
            onClick={closeBurgerMenu}
            className={`${styleLi} text-2xl`}
          >
            About
          </NavLink>
          <NavLink
            to={skills}
            onClick={closeBurgerMenu}
            className={`${styleLi} text-2xl`}
          >
            Skills
          </NavLink>
          <NavLink
            to={contacts}
            onClick={closeBurgerMenu}
            className={`${styleLi} text-2xl`}
          >
            Contacts
          </NavLink>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
