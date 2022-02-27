import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Modal,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Wallpapercard from './Wallpapercard';

const Animemodal = ({ data, setVisible, visible }) => {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    const fetchWallpapers = async () => {
      const wallpaperData = await axios.get(
        'https://bing-image-search1.p.rapidapi.com/images/search',
        {
          params: { q: `${data && data.title} phone wallpaper`, count: '30' },
          headers: {
            'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
            'x-rapidapi-key':
              '2e344ad320mshb969c78aadf5fb7p1de506jsna605b0dd8c13',
          },
        }
      );
      console.log(wallpaperData);
      setWallpapers(wallpaperData.data.value);
    };

    fetchWallpapers();
    console.log(data);
  }, [data]);

  return (
    <Modal visible={visible} style={styles.modal} propagateSwipe={true}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {data && (
            <View style={styles.modal}>
              <Text style={styles.modaltitle}>{data.title} Wallpapers</Text>
              <TouchableOpacity
                style={styles.modalbutton}
                onPress={() => setVisible(false)}
              >
                Close
              </TouchableOpacity>

              <View style={styles.grid}>
                {wallpapers &&
                  wallpapers.map((w) => {
                    return <Wallpapercard data={w} key={w.title} />;
                  })}
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
    position: 'absolute',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    height: '250px',
    width: '140px',
    borderRadius: 10,
  },
  modal: {
    display: 'flex',
    backgroundColor: 'black',
    paddingHorizontal: '20px',
    minHeight: 2000,
  },
  modaltitle: {
    fontSize: 20,
    padding: '10px',
    fontWeight: '700',
    color: 'white',
  },
  modalbutton: {
    marginVertical: '20px',
    width: 100,
    marginHorizontal: 'auto',
    backgroundColor: 'purple',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
    fontFamily: 'sans-serif',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridGap: '10px',
    marginVertical: '20px',
  },
});

export default Animemodal;
