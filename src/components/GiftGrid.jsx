import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifts";
import { UseFetchGifts } from "../hooks/UseFetchGifts";
import { GifItem } from "./GifItem";

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = UseFetchGifts(category);
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando ...</h2>}
      {/* <h5>{counter} </h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button> */}
      <div className="card-grid">
        {images && images.map((image) => <GifItem key={image.id} {...image} />)}
      </div>
    </>
  );
};
