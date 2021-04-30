import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActions } from '@actions';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { BaseColor, Images } from '@config';
import { Icon } from '@components';

class Header extends Component {
  render() {
    const { navigation, main, onClickSearch, onBack } = this.props;

    return (
      <>
        {main && (
          <Icon
            style={styles.searchIcon}
            name="search"
            size={25}
            color={BaseColor.textSecondaryColor}
            onPress={onClickSearch}
          />
        )}
        {!main && (
          <Icon
            style={styles.searchIcon}
            name="angle-left"
            size={35}
            color={BaseColor.textSecondaryColor}
            onPress={() => {
              this.props.authActions.setStatus(true);
              if(onBack !== null) onBack();
              navigation.goBack();
            }}
          />
        )}
        <TouchableOpacity
          onPress={() => {
              this.props.authActions.setStatus(true);
              if(onBack !== null) onBack();
              navigation.navigate('Landing', { home: true });
          }}>
          <Image
            source={Images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.header}>
          {/* <TouchableOpacity
            style={styles.notification}
            onPress={() => {
              navigation.navigate('Inbox');
            }}>
            <Text>4</Text>
            <Icon
              name="bell"
              size={25}
              color={BaseColor.textSecondaryColor}
            />
          </TouchableOpacity> */}
          <TouchableOpacity>
            <Icon
              style={styles.menuIcon}
              name="align-justify"
              size={25}
              color={BaseColor.textSecondaryColor}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

Header.propTypes = {
  main: PropTypes.bool,
  navigation: PropTypes.object,
  onClickSearch: PropTypes.func,
};

Header.defaultProps = {
  main: false,
  navigation: {},
  onClickSearch: () => { },
};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(AuthActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Header);
