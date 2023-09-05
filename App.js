import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import * as Location from 'expo-location';
import AddressForm from './AddressForm';
import JobList from './JobList';
import JobsMap from './JobsMap';

const App = () => {

  const [jobs, setJobs] = useState([
    { address: '2 Ironwood Cresent Stouffville Ontario', technician: 'Justin', id: '1' },
    { address: '44 Flint Cresent Stouffville Ontario', technician: 'Grant', id: '2' },
  ]);

  return (
    <View style={styles.container}>
      <JobsMap jobs={jobs}></JobsMap>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;