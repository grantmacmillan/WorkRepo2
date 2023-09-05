import React, { useState } from 'react';
import { View, Text, TextInput, Button, Linking } from 'react-native';

const AddressForm = () => {
    const [address, setAddress] = useState({
        street: '',
        city: '',
        province: '',
        houseNumber: '',
    });

    const handleInputChange = (field, value) => {
        setAddress({
            ...address,
            [field]: value,
        });
    };

    const handleSubmit = () => {
        // Construct the Google Maps URL with the address
        const mapsURL = `https://www.google.com/maps/search/?api=1&query=${address.houseNumber}+${address.street}+${address.city}+${address.province}`;

        // Open Google Maps with the constructed URL
        Linking.openURL(mapsURL);

        console.log('Submitted Address:', address);
    };

    return (
        <View>
            <Text>House Number</Text>
            <TextInput
                placeholder="Enter house number"
                onChangeText={(text) => handleInputChange('houseNumber', text)}
            />

            <Text>Street</Text>
            <TextInput
                placeholder="Enter street address"
                onChangeText={(text) => handleInputChange('street', text)}
            />

            <Text>City</Text>
            <TextInput
                placeholder="Enter city"
                onChangeText={(text) => handleInputChange('city', text)}
            />

            <Text>Province</Text>
            <TextInput
                placeholder="Enter province"
                onChangeText={(text) => handleInputChange('province', text)}
            />

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default AddressForm;