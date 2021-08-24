require("dotenv/config");

export const mutationpostHotelById = ({ id }, fields) => {
  const url = `${process.env.REACT_APP_API_URL}/${id}/?uuid=${process.env.REACT_APP_API_KEY}`;

  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};
