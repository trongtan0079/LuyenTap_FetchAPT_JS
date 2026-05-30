  // C1
  export const fetchAPI = (url) => {
  const data = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return data;
};

// C2
export const fetchAPIAsync = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};