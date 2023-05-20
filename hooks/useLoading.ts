import { create } from "zustand"

interface LoadingStore {
  loading: boolean
  setLoading: (value: boolean) => void
  loadingPost: boolean
  setLoadingPost: (value: boolean) => void
}

export const useLoading = create<LoadingStore>((set) => ({
  loading: false,
  setLoading(value) {
    set({ loading: value })
  },
  loadingPost: false,
  setLoadingPost(value) {
    set({ loading: value })
  },
}))