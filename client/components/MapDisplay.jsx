import React, {memo, useContext} from 'react';
import Map from "./Map";
import MarkerForm from './MarkerForm.jsx'
import {makeStyles} from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import {red} from '@material-ui/core/colors';
import {MapCollapseContext} from "../context/MapCollapseContext";
import TripDisplay from "./TripDisplay";
import {BrowserRouter} from "react-router-dom";
import {Switch} from 'react-router-dom'
import {Route} from "react-router-dom";
// import Fab from "@material-ui/core/Fab";
// import FaceIcon from '@material-ui/icons/Face';
// import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


const MapDisplay = (props) => {
    const classes = useStyles();
    const {handleExpandClick, mapHeight, expanded} = useContext(MapCollapseContext);

    return (
        <BrowserRouter>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <div
                style={mapHeight}
                onClick={handleExpandClick}
            >
                <Map
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyANq9H8F3LekACFLwylqb9dGv-Bgj2-kww'}
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '100%'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}
                />
            </div>
            <Switch>
                <Route>
                    <Collapse
                        in={expanded}
                        timeout="auto"
                        unmountOnExit
                    >
                        <MarkerForm/>
                    </Collapse>
                </Route>
                <Route>
                    <TripDisplay/>
                </Route>
            </Switch>
        </Grid>
        </BrowserRouter>
)
};
export default memo(MapDisplay);
