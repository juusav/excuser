export const collage = () => {
  const data = fetch("https://excuser.herokuapp.com/v1/excuse/college/");
  const collageData = data.json();
  return collageData;
};
