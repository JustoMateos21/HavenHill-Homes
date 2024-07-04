import React from "react";
import Map from "./_components/map";
type Props = {};

const MapPage = (props: Props) => {
  return (
    <div>
      <Map coordinates={[20, 20]} />
    </div>
  );
};

export default MapPage;
