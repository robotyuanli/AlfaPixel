import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import styles from './styles';
import { Image } from 'react-native';
import * as Utils from '../../utils';
import { View } from 'react-native-animatable';

class Article extends Component {  
  render() {
    const { picture, title, data } = this.props;
    
    return (
      <>
        <Image
          source={{ uri: picture }}
          resizeMode="stretch"
          style={styles.article}
        />
        <Text style={styles.title}>{title}</Text>
        {Utils.renderWebview(data)}
      </>
    );
  }
}

export default Article;

Article.propTypes = {
  report: PropTypes.object,
};

Article.defaultProps = {
  report: {},
};
