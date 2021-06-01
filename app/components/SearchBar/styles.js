import { StyleSheet } from 'react-native';
import { BaseColor } from '@config';

export default StyleSheet.create({
  searchInput: {
    flex: 1,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
  },
  searchBox: {
    display:'flex',
    marginHorizontal: 10,
    borderColor: BaseColor.textSecondaryColor,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  },
  searchIcon: {
    paddingHorizontal: 20,
  },
});
