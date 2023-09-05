import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const JobsMap = ({ jobs }) => {
    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: 43.771092,    // This is an arbitrary starting point
                longitude: -79.419747,  // Ideally, you'd calculate the average or a central point of all jobs
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {jobs.map(job => (
                <Marker
                    key={job.id}
                    coordinate={{
                        latitude: job.latitude,  // You'd have to add latitude and longitude to your jobs
                        longitude: job.longitude, // Or use a service/API to get them from the addresses
                    }}
                    title={job.title}
                    description={`${job.houseNumber} ${job.street}, ${job.city}, ${job.province}`}
                />
            ))}
        </MapView>
    );
};

export default JobsMap;