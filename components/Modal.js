import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Modal, Text, Button } from 'react-native';
import axios from 'axios';

const Animemodal = ({ data, setVisible, visible }) => {


  // const fetchWallpapers = async () => {

  //   const wallpaperData = await axios.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyDyF8GnTli-MVQSi9SRNYr46b61XYQxEoo')
    
  // }
  // useEffect(() => {

  //   'AIzaSyDyF8GnTli-MVQSi9SRNYr46b61XYQxEoo'
  //    console.log(data);
  // }, [visible]);



  return (
<View style={styles.container}>
{
  data && (
 <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <View style={styles.modal}>
          <Text style={styles.modaltitle}>{data.title}</Text>
          <Button style={styles.modalbutton} onPress={() => setVisible(false)} title='Close' />

          <Image  style={styles.image} source={data.image_url} />
          
        </View>
      </Modal>
  )
}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
    position: 'absolute'
    
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image:{
     height: '300px',
    width: '170px',
    borderRadius: 10,
  },
  modal:{
    display:'flex',
    padding: '20px'
  },
  modaltitle:{
    fontSize: 20,
    padding: '10px',
    fontWeight: '700'
  },
   modalbutton : {
     margin: '20px'
   }
});

export default Animemodal;
