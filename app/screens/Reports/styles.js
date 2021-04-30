import { StyleSheet } from 'react-native';
import { BaseColor } from '@config';

export default StyleSheet.create({
  header: {
    display:'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f3f3f5',
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnGroup: {
    display:'flex',
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  leftBtn: {
    marginLeft: 120,
  },
  footer: {
    alignSelf: 'flex-end',
  },
  closeIcon: {
    padding: 20,
    alignSelf: 'flex-end',
  },
});
