// FILE: screens/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../components/layout.js';

const WelcomeScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Never Give Up</Text>
        //añadir nombres aqui por favor
        <Text style={styles.subtitle}></Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 24,
    color: '#dddddd',
    marginTop: 20,
  },
});

export default WelcomeScreen;
