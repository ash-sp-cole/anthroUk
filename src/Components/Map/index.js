import { Paper } from "@material-ui/core";
import React, { memo , useState } from "react";
import "../Home/home.css";
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



  return (
    <div style={{ width: '75vw', margin: 'auto', backgroundColor: '#fafafa' }}>
      <Paper elevation={9}>
    
       <h2> {selection}</h2>
        <MapModal testProp={selection}  />
        <>
          <ComposableMap data-tip="" projectionConfig={{ scale: 200 }} style={{ width: '60%', margin: 'auto' }}>
            <ZoomableGroup>
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
                    const { NAME } = geo.properties;
                    setSelection(NAME);
                    
                
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

      </Paper>
    </div>
  );
};

export default memo(MapChart);
