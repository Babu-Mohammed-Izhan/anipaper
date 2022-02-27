import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
const Navbar = () => {
  return (
    <Layout style={styles.navbar}>
      <Text>Anipaper</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  navbar: {},
});

export default Navbar;
