import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: "Light",
    changeTheme: () => set((state) => ({ theme: state.theme === 'Light' ? "Dark" : "Light" }))
}))


export const useLangStore = create((set) => ({
    lang: "EN",
    changeLang: () => set((state) => ({ lang: state.lang === 'EN' ? "GR" : "EN" }))
}))