import { create } from "zustand";

type generationStoreProps = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isDark: boolean;
  setDark: (isDark: boolean) => void;
  isEnglish: boolean;
  setEnglish: (isEnglish: boolean) => void;
};

export const useGenerationStore = create<generationStoreProps>()((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  isDark: true,
  setDark: (isDark: boolean) => set({ isDark }),
  isEnglish: true,
  setEnglish: (isEnglish: boolean) => set({ isEnglish }),
}));
