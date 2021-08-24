require("dotenv/config");

export const mutationDeleteHotelById = ({ id }) => {
  const url = `${process.env.REACT_APP_API_URL}/${id}/?uuid=${process.env.REACT_APP_API_KEY}`;

  return fetch(url, {
    method: "DELETE",
  });
};
