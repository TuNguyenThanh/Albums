import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContainer}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy now!!!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },

  thumbnail: {
    width: 50,
    height: 50
  },

  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  image: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
