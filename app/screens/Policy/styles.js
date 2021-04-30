import { StyleSheet } from 'react-native';

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
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 40,
    color: '#828282',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeIcon: {
    padding: 20,
    alignSelf: 'flex-end',
  },
  policy: {
    fontSize: 20,
  },
});
