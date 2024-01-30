export const resetString = (word) => {
  return (word.charAt(0).toUpperCase() + word.slice(1)).replace("-", " ");
};
