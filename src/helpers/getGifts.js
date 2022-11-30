export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Zc2RYTHPkhYsHNxD4qky7jMPhC8JXLVl&q=${category}&limit=10`;
  
    const resp = await fetch(url);
  
    const { data } = await resp.json();
  
    const gifts = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    console.log(gifts);
  
    return gifts;
  };
  