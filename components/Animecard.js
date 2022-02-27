import { Card, Text } from '@ui-kitten/components';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Animecard = ({ data }) => {
  return (
    <Card>
      <Image style={styles.cover} source={data.image_url} />
    </Card>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: '400px',
    width: '200px',
  },
});

export default Animecard;
