import { StyleSheet } from 'react-native';
import { BaseColor } from '@config';

export default StyleSheet.create({
  footer: {
    backgroundColor: '#363636',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 60,
    marginTop: 30,
  },
  message: {
    color: BaseColor.greyColor,
    textAlign: 'center',
  },
  line: {
    width: '100%',
    height: 2,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: '#404040',
  },
  footTop: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: -20,
  },
  upButton: {
    display:'flex',
    flexDirection: 'row-reverse',
    borderRadius: 20,
    backgroundColor: BaseColor.whiteColor,
    borderColor: BaseColor.orangeColor,
    borderWidth: 2,
    width: 150,
    height: 45,
    justifyContent: 'center',
  },
  upText: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingLeft: 5,
    color: BaseColor.orangeColor,
  },
  upIcon: {
    alignSelf: 'center',
    paddingLeft: 10,
    color: BaseColor.orangeColor,
  },
  buttonGroup: {
    display:'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  buttonLeft: {
    color: BaseColor.whiteColor,
    marginLeft: 50,
    fontSize: 15,
  },
  buttonRight: {
    color: BaseColor.whiteColor,
    fontSize: 15,
    paddingBottom: 25,
  },
});
