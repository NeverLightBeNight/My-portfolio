import { Menu, X } from "lucide-react";
import useOpenBurgerMenu from "../../store/useOpenBurgerMenu";
import { Link, NavLink } from "react-router-dom";
import { home, about, skills, contacts } from "../../routes/path.json";

function Navbar() {
  const isBurgerMenu = useOpenBurgerMenu((state) => state.isBurgerMenu);
  const toggleBurgerMenu = useOpenBurgerMenu((state) => state.toggleBurger);
  const closeBurgerMenu = useOpenBurgerMenu((state) => state.closeBurger);

  const styleLi =
    "rounded-xl border border-white/0 px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:border-white/10 hover:bg-white/5 hover:text-white";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/8 bg-[#0b0b10]/65 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          className="text-lg font-medium tracking-[0.18em] text-white/95 transition-colors hover:text-white"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-200 hover:border-white/15 hover:bg-white/8 md:hidden"
          onClick={toggleBurgerMenu}
          aria-label="Toggle navigation menu"
        >
          {isBurgerMenu ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>

        {isBurgerMenu && (
          <div className="absolute left-0 top-full z-50 w-full border-b border-white/8 bg-[#0b0b10]/80 px-4 py-3 backdrop-blur-xl md:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col gap-1">
              <NavLink
                to={home}
                onClick={closeBurgerMenu}
                className={`${styleLi} w-full text-base`}
              >
                Home
              </NavLink>
              <NavLink
                to={about}
                onClick={closeBurgerMenu}
                className={`${styleLi} w-full text-base`}
              >
                About
              </NavLink>
              <NavLink
                to={skills}
                onClick={closeBurgerMenu}
                className={`${styleLi} w-full text-base`}
              >
                Skills
              </NavLink>
              <NavLink
                to={contacts}
                onClick={closeBurgerMenu}
                className={`${styleLi} w-full text-base`}
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
