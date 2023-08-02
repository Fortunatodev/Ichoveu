// Remova os comentários a medida que for implementando as funções
const key = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const result = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${key}&q=${term}`);
  const data = await result.json();
  if (!data[0]) {
    alert('Nenhuma cidade encontrada');
  }
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const result = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${key}&q=${cityURL}`);
  const data = await result.json();
  return {
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    name: data.location.name,
    country: data.location.country,
    url: cityURL,
  };
};
