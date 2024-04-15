import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GiftItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    
    const {images, isLoading } = useFetchGifs( category );
    
  return (
    <>
      <h3>{category}</h3>

      <ol>
        {images.map((img) => (
          <GiftItem key={img.id} title={img.title} url={img.url} />
        ))}
      </ol>
    </>
  );
};
