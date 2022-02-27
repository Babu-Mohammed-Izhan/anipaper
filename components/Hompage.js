import { useState, useEffect } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import Navbar from './Navbar';
import Animecard from './Animecard';
import axios from 'axios';

const Homepage = () => {
  const [animes, setanimes] = useState([]);

  const [animedata, setAnimedata] = useState({
    type: 'anime',
    page: 1,
    subtype: 'tv',
  });

  const [search, setSearch] = useState('');

  const [active, setActive] = useState(1);

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
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Navbar />
      <Text category="h1">Hello</Text>
      <Layout style={styles.grid}>
        {animes.map((a) => {
          return <Animecard data={a} key={a.rank} />;
        })}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  grid: {
    display: 'grid',
    'grid-template-columns': 'auto auto',
  },
});

export default Homepage;
