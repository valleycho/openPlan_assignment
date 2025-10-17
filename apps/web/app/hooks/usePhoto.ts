import { useQuery } from "@tanstack/react-query"
import { getPhotoInfoApi } from "../apis/photoApi";

export const useGetPhotoInfo = () => {
  const { data: photoInfo, isLoading: photoInfoLoading } = useQuery({
    queryKey: ['photoInfo'],
    queryFn: () => getPhotoInfoApi(),
  })

  return { photoInfo, photoInfoLoading };
}