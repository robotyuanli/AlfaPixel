import React from 'react';
import { StyleSheet } from 'react-native';
import { BaseColor } from '@config';

export default StyleSheet.create({
  first: {
    width: '100%',
    height: 150,
  },
  restImage: {
    width: 150,
    height: 100,
    marginLeft: 20,
  },
  title: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  center_title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  category: {
    marginTop: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    marginBottom: 10,
    backgroundColor: BaseColor.greyColor,
  },
  rest: {
    display:'flex',
    flexDirection: 'row-reverse',
  },
  detail: {
    flex: 1,
  },
});
