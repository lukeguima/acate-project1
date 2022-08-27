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

const Home = () => {
  // API
  const [character, setCharacter] = useState<ICharacter[]>();

  // Modal
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    Api.get('character').then(
      res => {
        setCharacter(res.data.results)
      }
    )
  })

  const selected = (item: ICharacter) => {
    dispatch(addFavorite(item));
  }

  return (
    <ScrollView>
      <View
        style={styles.container}
      >
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