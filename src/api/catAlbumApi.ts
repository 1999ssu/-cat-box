import axiosInstance from 'api/axiosInstance';
import { CatAlbumListType } from 'types/CatAlbumListType';

export const getCatImgs = async (limit = 8): Promise<CatAlbumListType[]> => {
  const response = await axiosInstance.get(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}`
  );
  return response.data;
};
