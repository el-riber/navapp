import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootParamList } from '../types/navigation';

type UserProfileRouteProp = RouteProp<RootParamList, 'UserProfile'>;

const UserProfilePage = () => {
  const route = useRoute<UserProfileRouteProp>();

  const { id = 'Unknown' } = route.params || {}; // Set default value

  return ( // Return statement within the function
    <View style={styles.container}>
      <Text style={styles.text}>User Profile Page</Text>
      <Text style={styles.text}>User ID: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserProfilePage; // Export at the end