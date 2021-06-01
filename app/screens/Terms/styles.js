import { StyleSheet } from 'react-native';

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
  content: {
    paddingLeft: 10,
    paddingRight: 15,
  },
  title: {
    fontSize: 40,
    color: '#828282',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  lineSpace: {
    height: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  closeIcon: {
    padding: 20,
    alignSelf: 'flex-end',
  },
  policy: {
    fontSize: 20,
    textAlign: 'left',
  },
});
