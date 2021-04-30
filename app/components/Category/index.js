import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActions } from '@actions';
import PropTypes from 'prop-types';
import Text from '../Text';
import styles from './styles';
import { View, Image, TouchableOpacity } from 'react-native';

class Category extends Component {
  onClickCategory = () => {
    const {
      navigation,
      position,
      categoryList,
      updateCategories,
      type,
      keyword,
    } = this.props;
    this.props.authActions.setStatus(true);
    if(type === 0) {
      navigation.navigate('Reports', { reports: categoryList, position });
    }
    else if(type === 1) {
      const children = categoryList.children;
      updateCategories(children[position]);
      navigation.navigate('Landing', { home: false });
    }
    else {
      navigation.navigate('SearchList', { categoryList, position, keyword });
    }
  };

  render() {
    const { parent, name, picture } = this.props;

    return (
      <TouchableOpacity
        style={styles.category}
        onPress={() => {
          if(!parent)
            this.onClickCategory()
        }}>
        {parent && picture !== undefined && picture !== '' && (
          <>
            <Image
              source={{ uri: picture }}
              style={styles.first}
              resizeMode="stretch"
            />
            <Text style={styles.center_title}>{name}</Text>
          </>
        )}
        {!parent && (
          <>
            <View style={styles.divider} />
            <View style={styles.rest}>
              <View style={styles.detail}>
                <Text style={styles.title}>{name}</Text>
              </View>
              <Image
                source={{ uri: picture }}
                style={styles.restImage}
                resizeMode="stretch"
              />
            </View>
          </>
        )}
      </TouchableOpacity>
    );
  }
}

Category.propTypes = {
  parent: PropTypes.bool,
  name: PropTypes.string,
  picture: PropTypes.string,
};

Category.defaultProps = {
  parent: false,
  name: '',
  picture: '',
};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(AuthActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Category);
