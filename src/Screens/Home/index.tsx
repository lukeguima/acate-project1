import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView
} from 'react-native';

import {
  useEffect,
  useState,
} from 'react';

import { StatusBar } from 'expo-status-bar';

import styles from './style';
import Api from '../../services/Api';

import {
  useDispatch,
  useSelector
} from 'react-redux';

import {
  addFavorite
} from '../../store/modules/favorite/reducer';

import {
  ICharacter
} from '../../types/index'

import {
  favoriteStateData
} from '../../store/modules/favorite/reducer'

const Home = () => {
  // API
  const [character, setCharacter] = useState<ICharacter[]>();

  // Modal
  const [showModal, setShowModal] = useState(false);

  // Card no Store
  const card = useSelector(favoriteStateData);

  const dispatch = useDispatch();

  useEffect(() => {
    Api.get('character').then(
      res => {
        setCharacter(res.data.results)
      }
    )
  })

  const selected = (item: ICharacter) => {
    console.log(item)
    dispatch(addFavorite(item));
  }

  return (
    <ScrollView>
      <StatusBar
        backgroundColor="#FFF"
        animated={true}
      />
      <View
        style={styles.container}
      >
        <View style={{ backgroundColor: '#000', width: '100%', paddingLeft: 9 }}>
          <Text style={styles.textTitle}>Selecionados:</Text>
        </View>
        {card.length > 0 ? (
          <View
            style={styles.containerCardsSelected}
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
          style={styles.containerCardsSelected}
          >
            <Text style={{fontSize: 14, color:'red', fontWeight:'bold', textAlign:'center', paddingLeft: 8}}>Selecionde os personagens</Text>
          </View>
        )}

        <Text style={styles.textTitle}>Cards:</Text>
        {character?.map(
          (item, index) => (
            <View
              style={styles.cardCharacter}
              key={index}
            >
              <View
                style={{ margin: 4, width: '100%' }}
              >
                <Text style={{ fontWeight: 'bold' }}> # {item.id}</Text>
              </View>
              <Image
                style={styles.imageCharacter}
                source={{ uri: item.image }}
              />
              <View
                style={styles.infoCharacter}
              >
                <Text
                  style={styles.text}
                >
                  Name: <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                </Text>
                <Text
                  style={styles.text}
                >
                  Specie: <Text style={{ fontWeight: 'bold' }}>{item.species}</Text>
                </Text>
                <Text
                  style={styles.text}
                >
                  Gender: <Text style={{ fontWeight: 'bold' }}>{item.gender}</Text>
                </Text>
              </View>
              <Pressable
                style={styles.button}
                onPress={() => {
                  selected(item)
                  setShowModal(!showModal)
                }}
              >
                <Text
                  style={styles.textButton}
                > favoritar </Text>
              </Pressable>
            </View>
          )
        )}
      </View>
    </ScrollView>
  )
}

export default Home;