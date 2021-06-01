import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActions } from '@actions';
import { View, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { BaseColor, BaseSetting, Images, Hebrew } from '@config';
import { Icon, Text, Image } from '@components';
import styles from './styles';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class DrawerContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, auth } = this.props;
    return (
      <>
        {Platform.OS === 'ios' && (
          <View
            style={{
              height: getStatusBarHeight(true),
              backgroundColor: BaseColor.primaryColor,
            }}>
            <StatusBar />
          </View>
        )}
        <View style={styles.drawerHeader}>
          <TouchableOpacity
            onPress={() => {
                this.props.authActions.setStatus(true);
                navigation.navigate('Landing', { home: true });
            }}>
            <Image
              source={Images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <DrawerContentScrollView {...this.props}>
          <DrawerItem
            label={Hebrew.TERMS_OF_USE}
            labelStyle={styles.itemTitle}
            onPress={() => {
              this.props.authActions.setStatus(true);
              navigation.navigate('Terms');
            }}
            activeTintColor={BaseColor.lightPrimaryColor}
          />
          <DrawerItem
            label={Hebrew.PRIVACY_POLICY}
            labelStyle={styles.itemTitle}
            onPress={() => {
              this.props.authActions.setStatus(true);
              navigation.navigate('Policy');
            }}
            activeTintColor={BaseColor.lightPrimaryColor}
          />
          <DrawerItem
            label={Hebrew.CONTACT_US}
            labelStyle={styles.itemTitle}
            onPress={() => {
              this.props.authActions.setStatus(true);
              navigation.navigate('Contact');
            }}
            activeTintColor={BaseColor.lightPrimaryColor}
          />
          {/* <DrawerItem
            label={Hebrew.SETTINGS}
            onPress={() => {
              navigation.navigate('Settings');
            }}
            activeTintColor={BaseColor.lightPrimaryColor}
          /> */}
        </DrawerContentScrollView>
        <View style={styles.versionContainer}>
          <Text title3>Version {BaseSetting.appVersion}</Text>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(AuthActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
