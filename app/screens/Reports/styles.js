import { StyleSheet } from 'react-native';
import { BaseColor } from '@config';

export default StyleSheet.create({
  header: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f3f3f5',
    paddingTop: 10,
    paddingBottom: 10,
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
