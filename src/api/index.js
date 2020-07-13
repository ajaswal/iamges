const BASE_URL = "http://demo3136867.mockable.io";

const getPopular = () => {
  return fetch(`${BASE_URL}/carousel`)
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
};

const getFeatured = () => {
  return fetch(`${BASE_URL}/featured`)
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
};

export { getPopular, getFeatured };
