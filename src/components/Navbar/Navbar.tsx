import { Home, UserRound, Briefcase, Mail } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { home, about, skills, contacts } from "../../routes/path.json";

function Navbar() {
  const desktopLink =
    "rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/5 hover:text-white active:translate-y-px";

  const mobileBase =
    "group flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-medium text-white/65 transition-all duration-300 hover:bg-white/5 hover:text-white active:translate-y-px";

  const activeBounce =
    "bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_18px_rgba(34,211,238,0.14)] [&_svg]:animate-bounce [&_svg]:[animation-duration:0.55s]";

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-[#0b0b10]/75 backdrop-blur-xl">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <Link
            to={home}
            className="relative text-lg font-medium tracking-[0.18em] text-white/95"
          >
            Portfolio
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <NavLink to={home} end className={desktopLink}>
              Home
            </NavLink>
            <NavLink to={about} className={desktopLink}>
              About
            </NavLink>
            <NavLink to={skills} className={desktopLink}>
              Skills
            </NavLink>
            <NavLink to={contacts} className={desktopLink}>
              Contacts
            </NavLink>
          </nav>
        </div>
      </header>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/8 bg-[#0b0b10]/90 px-3 py-2 backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-4 gap-2">
          <NavLink
            to={home}
            end
            className={({ isActive }) =>
              `${mobileBase} ${isActive ? activeBounce : ""}`
            }
          >
            <Home className="h-5 w-5 transition-transform duration-200" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to={about}
            className={({ isActive }) =>
              `${mobileBase} ${isActive ? activeBounce : ""}`
            }
          >
            <UserRound className="h-5 w-5 transition-transform duration-200" />
            <span>About</span>
          </NavLink>

          <NavLink
            to={skills}
            className={({ isActive }) =>
              `${mobileBase} ${isActive ? activeBounce : ""}`
            }
          >
            <Briefcase className="h-5 w-5 transition-transform duration-200" />
            <span>Skills</span>
          </NavLink>

          <NavLink
            to={contacts}
            className={({ isActive }) =>
              `${mobileBase} ${isActive ? activeBounce : ""}`
            }
          >
            <Mail className="h-5 w-5 transition-transform duration-200" />
            <span>Contact</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
