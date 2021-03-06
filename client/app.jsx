
import React, {useEffect, useContext} from 'react';
import { render } from 'react-dom';
import MapDisplay from './components/MapDisplay.jsx';
import MarkerForm from './components/MarkerForm.jsx';
import ImageDisplay from './components/ImageDisplay.jsx';
import MarkerInfoBox from './components/MarkerInfoBox.jsx';
import TagSearch from "./components/TagSearch";
import style from './style.css'
import { Animated } from 'react-animated-css';
import { MapDisplayProvider} from "./context/MapDisplayContext";
import { MapCollapseProvider} from "./context/MapCollapseContext";
import BAppBar from './components/AppBar';

//this one renders ya know the app.
const App = (props) => {
   return (
    <div id="map">
      <MapDisplayProvider>
          <BAppBar
              color='primary'
              position='fixed'
          >
              Hello
          </BAppBar>
      {/* header / title */}
      {/* map display */}
          <MapCollapseProvider>
            <MapDisplay/>
          </MapCollapseProvider>
          {/*<h1 className="title">*/}
          {/*  Dear Travel Diary...*/}
          {/*</h1>*/}
        {/* Tag and description to the right of the map */}
    </MapDisplayProvider>
    </div>
   )
};
export default App;
