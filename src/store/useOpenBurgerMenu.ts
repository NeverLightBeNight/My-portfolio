import { create } from "zustand";

type BurgerStore = {
  isBurgerMenu: boolean;
  toggleBurger: () => void;
  openBurger: () => void;
  closeBurger: () => void;
};

const useOpenBurgerMenu = create<BurgerStore>((set) => ({
  isBurgerMenu: false,

  toggleBurger: () =>
    set((state) => ({
      isBurgerMenu: !state.isBurgerMenu,
    })),

  openBurger: () =>
    set({
      isBurgerMenu: true,
    }),

  closeBurger: () =>
    set({
      isBurgerMenu: false,
    }),
}));
export default useOpenBurgerMenu;
