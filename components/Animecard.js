import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Animecard = ({ data }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cover} source={data.image_url} />
    </View>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: '300px',
    width: '170px',
    borderRadius: 10,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Animecard;
