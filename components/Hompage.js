import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import Navbar from './Navbar';
import Animecard from './Animecard';
import Modal from './Modal';
import axios from 'axios';
import { FlatGrid } from 'react-native-super-grid';

const Homepage = () => {
  const [animes, setanimes] = useState([]);
  const [visible, setVisible] = useState(false);
  const [Animeid, setAnimeid] = useState(null);
  const foundanime = animes.find((anime) => {
    return anime.mal_id === Animeid;
  });

  const [animedata, setAnimedata] = useState({
    type: 'anime',
    page: 1,
    subtype: 'tv',
  });
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(1);

  const handlePress = (a) => {
    setAnimeid(a.mal_id);
    setVisible(true);
    console.log('Pressed');
  };

  const getData = async ({ type, page, subtype }) => {
    const data = await axios.get(
      `https://api.jikan.moe/v3/top/${type}/${page}/${subtype}`
    );
    return data.data;
  };

  const searchData = async ({ type, search }) => {
    const data = await axios.get(
      `https://api.jikan.moe/v3/search/${type}?q=${search}&page=${active}`
    );
    return data.data;
  };
  async function fetchanime() {
    const data = await getData(animedata);
    console.log(data);
    setanimes(data.top);
  }

  async function searchanime() {
    if (search !== '') {
      const data = await searchData({ type: animedata.type, search });
      console.log(data);
      setanimes(data.results);
    }
  }

  useEffect(() => {
    fetchanime();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <Navbar />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <FlatGrid
            itemDimension={140}
            spacing={10}
            data={animes}
            style={styles.gridView}
            renderItem={({ item }) => (
              <Pressable key={item.rank} onPress={() => handlePress(item)}>
                <Animecard data={item} />
              </Pressable>
            )}
          />
        </ScrollView>
      </SafeAreaView>
      {foundanime && (
        <Modal data={foundanime} visible={visible} setVisible={setVisible} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'black',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default Homepage;
