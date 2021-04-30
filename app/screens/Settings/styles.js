import React from 'react';
import { StyleSheet } from 'react-native';
import { BaseColor } from '@config';

export default StyleSheet.create({
  header: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'right',
  },
  sectionList: {
    marginTop: 10,
  },
  section: {
    fontSize: 20,
    textAlign: 'right',
    paddingRight: 20,
    color: BaseColor.whiteColor,
    backgroundColor: '#999999',
  },
  rowContainer: {
    flexDirection: 'row-reverse',
  },
  item: {
    padding: 10,
    alignSelf: 'flex-end',
    width: '100%',
  },
  checkbox: {
    alignSelf: 'center',
  },
  name: {
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    marginLeft: 20,
  },
  signOutButton: {
    marginTop: 20,
  },
});
