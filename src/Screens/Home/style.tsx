import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6600cc',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
    marginVertical: 4
  },
  cardCharacter: {
    width: Dimensions.get('window').width - 100,
    alignItems: 'center',
    backgroundColor: '#FFF',
    elevation: 5,
    borderRadius: 10,
    margin: 8,
    padding: 8
  },
  imageCharacter: {
    width: 120,
    height: 120,
    borderRadius: 100
  },
  infoCharacter: {
    backgroundColor: '#4F4F4F',
    width: '100%',
    borderRadius: 4,
    marginTop: 8,
    padding: 8
  },
  text: {
    fontSize: 14,
    color: '#fff'
  },
  button: {
    backgroundColor: '#68228B',
    marginTop: 8,
    height: 45,
    width: '100%',
    borderColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: '#fff',
    fontSize: 12,
    fontWeight: "bold"
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F4F4F'
  },
  buttonClose: {
    backgroundColor: '#68228B',
    marginTop: 8,
    height: 45,
    width: Dimensions.get('window').width - 200,
    borderColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})