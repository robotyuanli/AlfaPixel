import { BaseColor } from '@config';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  drawerHeader: {
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  logo: {
    width: 112,
    height: 50,
  },
  drawerHeaderContent: {
    marginLeft: 10,
  },
  drawerHeaderText: {
    color: BaseColor.whiteColor,
    fontSize: 20,
    marginTop: 5,
  },
  icon: {
    marginLeft: 10,
    width: 30,
  },
  itemTitle: {
    textAlign: 'right',
  },
  versionContainer: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
  },
});
