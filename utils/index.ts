// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '442c79920emsha99065c39aea6bbp1a8f1djsn41197b5a633d',
//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '442c79920emsha99065c39aea6bbp1a8f1djsn41197b5a633d',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
}
