//catAlbum hook

import { getCatImgs } from 'api/catAlbumApi';
import { useEffect, useState } from 'react';
import { CatAlbumListType } from 'types/CatAlbumListType';

const useCatImgs = () => {
  const [catImgs, setCatImgs] = useState<CatAlbumListType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getImgs = async () => {
      try {
        const catImgData = await getCatImgs();
        const normalizedData = Array.isArray(catImgData) ? catImgData : [catImgData];

        setCatImgs(normalizedData);
      } catch (error: any) {
        setError(error.message || 'Failed to fetch imgs');
      } finally {
        setLoading(false);
      }
    };
    getImgs();
  }, []);
  return { catImgs, loading, error };
};

export default useCatImgs;