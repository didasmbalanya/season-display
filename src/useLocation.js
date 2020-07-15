import { useState, useEffect } from "react";

export const useLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLatitudeFetch = () => {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude } }) => setLatitude(latitude),
      (err) => setErrorMessage(err.message)
    );
  };

  useEffect(() => {
    handleLatitudeFetch();
  }, []);

  return [latitude, errorMessage]
};
