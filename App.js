import { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

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

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">HOME</Text>
  </Layout>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);
