import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifts";

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
      <ol>
        {images &&
          images.map(({id, title}) => <li key={id}>{title}</li>)}
      </ol>
    </>
  );
};
