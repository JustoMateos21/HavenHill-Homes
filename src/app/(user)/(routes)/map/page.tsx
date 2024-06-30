"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";

type Props = {};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = (props: Props) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCJN3QnJOTcE7MvoVXfQsJHOOQ0ssVuC7Y",
  });

  const [map, setMap] = useState(null);
  const [selected, setSelected] = useState();

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded ? (
    <section className=" flex items-center justify-center flex-col ">
      <h1>Map</h1>
      <GoogleMap
        mapContainerStyle={{
          width: "100vh",
          height: "100vh",
        }}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </section>
  ) : (
    <div>Loading...</div>
  );
};

export default Map;
