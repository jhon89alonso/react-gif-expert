import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifts";
import { GifItem } from "./GifItem";

export const GiftGrid = ({ category }) => {
  // const [counter, setCounter] = useState(10);
  const [images, setImages] = useState();

  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  //getGifts(category);

  return (
    <>
      <h3>{category}</h3>
      {/* <h5>{counter} </h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button> */}
      <div className="card-grid">
        {images &&
          images.map((image) => 
          <GifItem key={image.id} {...image}/>
          )}
      </div>
    </>
  );
};
