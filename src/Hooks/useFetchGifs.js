import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    getGifs(category).then((newImages) => setImages(newImages));
    setIsLoading(false)
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isLoading,
  };
};
