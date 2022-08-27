import {
  StyleSheet,
  Dimensions
} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#4E009B',
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingTop: 4
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    marginVertical: 2
  },
  containerSelected: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexDirection: 'row'
  },
  cardSelected: {
    marginHorizontal: 8,
    alignItems: 'center',
    height: 100
  },
  imageSelected: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  textSelected: {
    paddingTop: 2,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#FFF'
  },
  containerMessage: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    height: 60
  },
  textMessage: {
    paddingTop: 2,
    fontWeight: '500',
    fontSize: 16,
    color: '#FFFF00'
  }
})