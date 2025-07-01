import { useState, useEffect } from 'react';

// custom hook pa hacer fetch a URL
const useFetchCharacters = (url) => {
  const [data, setData] = useState(null); // guarda datos de la API
  const [loading, setLoading] = useState(true); // carga
  const [error, setError] = useState(null); // error

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // empezamos cargando
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al obtener los datos');
        const json = await response.json();
        setData(json); // guardamos datos
      } catch (err) {
        setError(err.message); // guardamos error si ocurre
      } finally {
        setLoading(false); // dejamos de cargar si o si!
      }
    };

    fetchData();
  }, [url]); // vuelve a ejecutar SOLO si cambia la URL

  return { data, loading, error };
};

export default useFetchCharacters;
