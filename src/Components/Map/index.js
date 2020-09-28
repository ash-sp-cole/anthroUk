import { Paper } from "@material-ui/core";
import React, { memo, useState } from "react";
import "../Home/home.css";
import "../Map/map.css";
import mapJson from "../Map/mapInfo.json";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";


import MapModal from "./modalMap";

const geoUrl = mapJson




const MapChart = ({ setTooltipContent }) => {

  let [selection, setSelection] = useState(null);

  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  function handleZoomIn() {
    if (position.zoom >= 6) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  return (
    <div style={{ width: '99%', margin: 'auto'}}>
      <Paper elevation={9}>

        <h2> {selection}</h2>
        <MapModal testProp={selection} />
        <>
          <ComposableMap data-tip="" projectionConfig={{ scale: 200 }} style={{ width: '60%', margin: 'auto' }}>
            <ZoomableGroup
             zoom={position.zoom}
             center={position.coordinates}
             onMoveEnd={handleMoveEnd}  
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const { NAME, COMMUNITIES } = geo.properties;
                        setTooltipContent(`${NAME} —${COMMUNITIES} `);


                      }}
                      onClick={() => {
                        const { SEARCH_NAME } = geo.properties;
                        setSelection(SEARCH_NAME);


                      }}
                      style={{
                        default: {
                          fill: "#D6D6DA",
                          outline: "none"
                        },
                        hover: {
                          fill: "#F53",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#E42",
                          outline: "none"
                        }
                      }}
                    />
                  ))
                }
              </Geographies>
              
            </ZoomableGroup>
            
          </ComposableMap>
         
        </>
        <div className="controls"style={{paddingBottom:'5%'}}>
          <button onClick={handleZoomIn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <button onClick={handleZoomOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </Paper>

    </div>
  );
};

export default memo(MapChart);
