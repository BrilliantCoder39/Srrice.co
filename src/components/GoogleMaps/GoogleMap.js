import React, { useState, useEffect } from 'react';

const MapWithAddress = ({ address }) => {
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        const fetchCoordinates = async () => {
            const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                
                if (data.results.length > 0) {
                    const location = data.results[0].geometry.location;
                    setCoordinates({ lat: location.lat, lng: location.lng });
                } else {
                    throw new Error('No results found');
                }
            } catch (error) {
                console.error('Error fetching coordinates:', error);
            }
        };

        fetchCoordinates();
    }, [address]);

    useEffect(() => {
        if (coordinates) {
            // Display map using coordinates
            initMap(coordinates);
        }
    }, [coordinates]);

    const initMap = (coordinates) => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 15
        });

        // Add marker to map
        new window.google.maps.Marker({
            position: coordinates,
            map: map,
            title: 'Your Location'
        });
    };

    return (
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
    );
};

export default MapWithAddress;
