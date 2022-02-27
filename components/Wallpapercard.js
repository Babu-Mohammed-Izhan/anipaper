import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { Camera } from 'expo-camera';

const Wallpapercard = ({ data }) => {
  const saveFile = async (fileUri) => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync('Download', asset, false);
    }
  };

  const handleDownload = (link) => {
    let fileUri =
      FileSystem.documentDirectory + `${data.imageId}${data.encodingFormat}`;
    FileSystem.downloadAsync(link, fileUri)
      .then(({ uri }) => {
        saveFile(uri);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.card}>
      <Image style={styles.cover} source={data.thumbnailUrl} />
      <TouchableOpacity
        style={styles.downloadbutton}
        onPress={() => handleDownload(data.contentUrl)}
      >
        <Text style={styles.buttontext}>Download</Text>
      </TouchableOpacity>
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
  downloadbutton: {
    marginVertical: '20px',
    width: 100,
    marginHorizontal: 'auto',
    backgroundColor: 'purple',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
  },
  buttontext: {
    color: 'white',
    fontFamily: 'sans-serif',
  },
});

export default Wallpapercard;
