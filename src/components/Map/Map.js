import React from 'react';
import GoogleMapReact from 'google-map-react';
import {useMediaQuery} from '@material-ui/core';


import useStyles from './styles.js';

const Map = ({setCoordinates, setBounds, coordinates}) => {

    const isMobile = useMediaQuery('(min-width:600px)');
    const classes = useStyles();


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAzFTAH28WthCSMl0VrFWe_Qs1ZJsYlJT4'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={ (e)=> {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={''}
            >
            </GoogleMapReact>
        </div>
    )
};

export default Map;
