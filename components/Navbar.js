import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>Anipaper</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingVertical: '10px',
    paddingHorizontal: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  logo: {
    fontSize: 50,
    fontWeight: '700',
    color: 'purple',
  },
});

export default Navbar;
