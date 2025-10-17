import axios from "axios"
import { PhotoInfo } from "../types/PhotoTypes"


export const getPhotoInfoApi = async () => {
  const { data } = await axios.get<PhotoInfo>(`https://picsum.photos/id/0/info`)
  return data
}