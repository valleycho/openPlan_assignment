import { create } from "zustand";
import { PhotoInfo } from "../types/PhotoTypes";

interface PhotoState {
  photoInfo: PhotoInfo;
  setPhotoInfo: (photoInfo: PhotoInfo) => void;
}

export const usePhotoStore = create<PhotoState>((set) => ({
  photoInfo: {
    id: '',
    author: '',
    width: 0,
    height: 0,
    url: '',
    download_url: '',
  },

  setPhotoInfo: (photoInfo: PhotoInfo) => set({ photoInfo }),
}))