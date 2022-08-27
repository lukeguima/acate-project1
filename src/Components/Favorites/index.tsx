import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';

import {
  useSelector
} from 'react-redux';

import {
  favoriteStateData
} from '../../store/modules/favorite/reducer'

import styles from './style';

const Favorites = () => {
  // Card no Store
  const card = useSelector(favoriteStateData);

  return (
    <ScrollView
    style={{ width: Dimensions.get('window').width,  backgroundColor: '#4E009B' }}
      horizontal={true}
    >
      <View
        style={styles.container}
      >
        <View style={{ width: '100%', paddingLeft: 8 }}>
          <Text style={styles.textTitle}>Selecionados:</Text>
        </View>
        {card.length > 0 ? (
          <View
            style={styles.containerSelected}
          >
            {card.map((item, index) => (
              <View
                style={styles.cardSelected}
                key={index}>
                <Image
                  style={styles.imageSelected}
                  source={{ uri: item.image }}
                />
                <Text style={styles.textSelected}>{item.name}</Text>
              </View>
            ))}
          </View>
        ) : (
          <View
            style={styles.containerMessage}
          >
            <Text style={styles.textMessage}>Favorite os personagens!</Text>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

export default Favorites;