import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Animecard = ({ data }) => {
  return (
    <View>
      <Image style={styles.cover} source={data.image_url} />
    </View>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: '300px',
    width: '170px',
    borderRadius: 10
  },
});

export default Animecard;
