"use client";

import { useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Library } from "@googlemaps/js-api-loader";
import { LatLong } from "@/types/index";
import { Input } from "@/components/ui/input";
import { addListener } from "process";

type Props = {};

const libs: Library[] = ["core", "maps", "places", "marker"];

const Map = (latLong: LatLong) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
    libraries: libs,
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const placesAutocompleteRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autocomplete) {
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        setSelectedPlace(place.formatted_address as string);
        const position = place?.geometry?.location;
        if (position) {
          setMarker(position, place.name!);
        }
      });
    }
  }, [autocomplete]);

  useEffect(() => {
    if (isLoaded) {
      const mapOptions = {
        center: {
          lat: latLong.coordinates[0],
          lng: latLong.coordinates[1],
        },
        zoom: 17,
        mapId: "1234",
      };
      const gMap = new google.maps.Map(
        mapRef.current as HTMLDivElement,
        mapOptions
      );

      const defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng({ lat: 48, lng: -89 }),
        new google.maps.LatLng({ lat: 54, lng: -82 })
      );

      const gAutocomplete = new google.maps.places.Autocomplete(
        placesAutocompleteRef.current as HTMLInputElement,
        {
          bounds: defaultBounds,
          fields: ["formatted_address", "geometry", "name"],
        }
      );
      setAutocomplete(gAutocomplete);
      setMap(gMap);
    }
  }, [isLoaded]);

  function setMarker(location: google.maps.LatLng, name: string) {
    if (!map) return;
    map.setCenter(location);
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: location,
      title: "Marker",
    });

    const infoCard = new google.maps.InfoWindow({
      position: location,
      maxWidth: 200,
    });
  }

  return (
    <div>
      <Input ref={placesAutocompleteRef} />
      {isLoaded ? <div ref={mapRef} style={{ height: "400px" }} /> : <div />}
    </div>
  );
};

export default Map;
