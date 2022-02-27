import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const Animecard = ({ data }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cover} source={data.image_url} />
      <Text style={styles.title}>{data.title}</Text>
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
    marginBottom: 10,
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Animecard;
