import axiosInstance from 'api/axiosInstance';
import { CatAlbumListType } from 'types/CatAlbumListType';

export const getCatImgs = async (): Promise<CatAlbumListType[]> => {
  const response = await axiosInstance.get('/api/cats');
  return response.data;
};
