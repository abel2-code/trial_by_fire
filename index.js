const axios = require("axios");

axios
  .get(
    `http://api.giphy.com/v1/gifs/search?api_key=TZMzIVU9PeU9S5uUXXBSKZrBfRv9woGI&q=kanye&limit=12`
  )
  .then((res) => {
    const gifs = res.data.data;
    gifs.map((gif) => console.log(gif.images.downsized.url));
  });
