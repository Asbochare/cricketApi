const API_KEY = "832df31f-366a-4040-a1e3-c192ba75ba51";

export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/currentMatches?api=${API_KEY}&offset=0`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the score of the cuurent match

export const getMatchDetail = (id) => {
  const url = `https://api.cricapi.com/v1/cricScore?unique_id=${id}&apikey=${API_KEY}`;
  
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
