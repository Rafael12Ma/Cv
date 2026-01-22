import { create } from "zustand";

export const useThemeStore = create((set) => ({
    themeZ: "dark",
    changeTheme: () => set((state) => ({ themeZ: state.themeZ === 'light' ? "dark" : "light" }))
}))


export const useLangStore = create((set) => ({
    lang: "EN",
    changeLang: () => set((state) => ({ lang: state.lang === 'EN' ? "GR" : "EN" }))
}))