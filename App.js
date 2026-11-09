import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import GlassForm from './components/GlassForm';

// Main app component that renders the glass form over a background image for better visibility of the blur effect.
export default function App() {
  return (
    <ImageBackground
      source={{ uri: 'https://example.com/background-image.jpg' }} // Replace with a vibrant background image URL for demo
      style={styles.background}
    >
      <View style={styles.container}>
        <GlassForm />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});