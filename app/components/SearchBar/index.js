import React, { Component } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { BaseColor } from '@config';
import { Icon } from '@components';
import { Hebrew } from '@config';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { onCloseSearchBox, keyValue, onChangeText } = this.props;

    return (
      <TouchableOpacity onPress={onCloseSearchBox} style={styles.searchBox}>
        <Icon
          style={styles.searchIcon}
          name="times"
          size={25}
          color={BaseColor.textSecondaryColor}
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => onChangeText(text)}
          autoCapitalize={'none'}
          textAlign={'right'}
          autoFocus={true}
          autoCorrect={false}
          placeholder={Hebrew.ENTER_KEY}
          placeholderTextColor={BaseColor.placeholderTextColor}
          value={keyValue}
        />
      </TouchableOpacity>
    );
  }
}

SearchBar.propTypes = {
  onClickSearchBox: PropTypes.func,
  onChangeText: PropTypes.func,
  keyValue: PropTypes.string,
};

SearchBar.defaultProps = {
  onClickSearchBox: () => {},
  onChangeText: () => {},
  keyValue: '',
};
