import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';

const Modal = ({ title }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)}>TOGGLE MODAL</Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <Text>Welcome to UI Kitten 😻</Text>
          <Button onPress={() => setVisible(false)}>DISMISS</Button>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Modal;
