import React from 'react';
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
    title: {
        fontSize: 40,
        color: '#828282',
        fontWeight: 'bold',
    },
    subTitle: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeIcon: {
      padding: 20,
      alignSelf: 'flex-end',
    },
});
