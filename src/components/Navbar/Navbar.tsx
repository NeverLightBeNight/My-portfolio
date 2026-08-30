import { Menu, X } from "lucide-react";
import useOpenBurgerMenu from "../../store/useOpenBurgerMenu";
import { Link, NavLink } from "react-router-dom";
import { home, about, skills, contacts } from "../../routes/path.json";

function Navbar() {
  const isBurgerMenu = useOpenBurgerMenu((state) => state.isBurgerMenu);
  const toggleBurgerMenu = useOpenBurgerMenu((state) => state.toggleBurger);
  const closeBurgerMenu = useOpenBurgerMenu((state) => state.closeBurger);

  const styleLi =
    "rounded-xl px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-white";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-bgBody/90 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          className="text-xl font-semibold tracking-[0.22em] text-white"
          to={home}
        >
          Portfolio
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
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

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          onClick={toggleBurgerMenu}
          aria-label="Toggle navigation menu"
        >
          {isBurgerMenu ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        {isBurgerMenu && (
          <div className="absolute left-0 top-full z-50 w-full border-b border-white/10 bg-bgBody/95 px-4 py-4 backdrop-blur-xl md:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col gap-2">
              <NavLink
                to={home}
                onClick={closeBurgerMenu}
                className={`${styleLi} w-full text-lg`}
              >
                Home
              </NavLink>
              <NavLink
                to={about}
                onClick={closeBurgerMenu}
                className={`${styleLi} w-full text-lg`}
              >
                About
              </NavLink>
              <NavLink
                to={skills}
                onClick={closeBurgerMenu}
                className={`${styleLi} w-full text-lg`}
              >
                Skills
              </NavLink>
              <NavLink
                to={contacts}
                onClick={closeBurgerMenu}
                className={`${styleLi} w-full text-lg`}
              >
                Contacts
              </NavLink>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
