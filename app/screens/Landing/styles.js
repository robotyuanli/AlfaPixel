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
  searchIcon: {
    paddingHorizontal: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  indicator: {
    marginTop: 100,
    marginBottom: 100,
    alignItems: 'center',
    alignSelf: 'center',
  },
  closeIcon: {
    padding: 20,
    alignSelf: 'flex-end',
  },
});
