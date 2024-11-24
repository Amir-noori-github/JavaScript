//
'use strict';
const karaporttiCoords = [60.220566, 24.812140]; // Coordinates of Karaportti 2
const map = L.map('map').setView(karaporttiCoords, 13);

// Add tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let routeLayer = null; // Layer for the route

document.getElementById('addressForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const address = document.getElementById('address').value;
    const routeInfoDiv = document.getElementById('route-info');
    routeInfoDiv.innerHTML = 'Loading route...';

    try {
        // Fetch coordinates for the entered address
        const geocodeResponse = await fetch(`https://api.digitransit.fi/geocoding/v1/search?text=${encodeURIComponent(address)}`);
        const geocodeData = await geocodeResponse.json();

        if (!geocodeData.features.length) {
            routeInfoDiv.innerHTML = 'Address not found. Please try again.';
            return;
        }

        const userCoords = geocodeData.features[0].geometry.coordinates; // [lon, lat]
        const [userLon, userLat] = userCoords;

        // Fetch route from the user's location to Karaportti 2
        const routeResponse = await fetch(
            `https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                            {
                                plan(
                                    from: { lat: ${userLat}, lon: ${userLon} }
                                    to: { lat: ${karaporttiCoords[0]}, lon: ${karaporttiCoords[1]} }
                                    numItineraries: 1
                                ) {
                                    itineraries {
                                        legs {
                                            startTime
                                            endTime
                                            legGeometry {
                                                points
                                            }
                                        }
                                    }
                                }
                            }
                            `,
                }),
            }
        );

        const routeData = await routeResponse.json();

        if (!routeData.data.plan.itineraries.length) {
            routeInfoDiv.innerHTML = 'Route not found. Please try again.';
            return;
        }

        const itinerary = routeData.data.plan.itineraries[0];
        const legs = itinerary.legs;
        const startTime = new Date(legs[0].startTime).toLocaleTimeString();
        const endTime = new Date(legs[legs.length - 1].endTime).toLocaleTimeString();

        // Update the route info
        routeInfoDiv.innerHTML = `Route found! Start: ${startTime}, End: ${endTime}`;

        // Decode and display the route on the map
        if (routeLayer) {
            map.removeLayer(routeLayer);
        }
        const routeCoordinates = [];
        legs.forEach((leg) => {
            const points = decodePolyline(leg.legGeometry.points);
            routeCoordinates.push(...points);
        });

        routeLayer = L.polyline(routeCoordinates, { color: 'blue', weight: 5 }).addTo(map);
        map.fitBounds(routeLayer.getBounds());
    } catch (error) {
        console.error('Error:', error);
        routeInfoDiv.innerHTML = 'An error occurred while fetching the route. Please try again.';
    }
});

// Decode polyline from Digitransit response
function decodePolyline(encoded) {
    let points = [];
    let index = 0, lat = 0, lng = 0;

    while (index < encoded.length) {
        let b, shift = 0, result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        let dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lat += dlat;

        shift = 0;
        result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        let dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lng += dlng;

        points.push([lat / 1E5, lng / 1E5]);
    }

    return points;
}