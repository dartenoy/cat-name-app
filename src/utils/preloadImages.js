export const preloadImages = (imageUrls) => {
  imageUrls.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
