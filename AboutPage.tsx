// app/(tabs)/AboutPage.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootParamList } from '../../types/navigation';

 function AboutPage() {
  const navigation = useNavigation<StackNavigationProp<RootParamList>>();

  return (
    <View style={(StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
    })).container}>
      <Text style={(StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        },
      })).title}>About Page</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.replace('Home')}
      />
      <Button
        title="Push to Home"
        onPress={() => navigation.push('Home')}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});






export default AboutPage;
