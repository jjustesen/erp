require("dotenv/config");

export const mutationPostHotel = (fields) => {
  const url = `${process.env.REACT_APP_API_URL}/?uuid=${process.env.REACT_APP_API_KEY}`;

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};
