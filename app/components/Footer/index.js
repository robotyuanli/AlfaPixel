import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActions } from '@actions';
import { Pressable } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text';
import styles from './styles';
import { View, Image } from 'react-native';
import { Hebrew } from '@config';
import { Icon } from '@components';
import { footerText } from '../../../app.json';

class Footer extends Component {
 
  render() {
    const { navigation, goUp } = this.props;

    return (
      <>
        <View style={styles.footer}>
          <Pressable style={styles.footTop} onPress={goUp}>
            <View style={styles.upButton}>
              <Icon style={styles.upIcon} name={'angle-up'} />
              <Text style={styles.upText}>{Hebrew.GO_UP}</Text>
            </View>
          </Pressable>
          <Text style={styles.message}>{footerText}</Text>
          <View style={styles.line} />
          <View style={styles.buttonGroup}>
            <Pressable
              onPress={() => {
                this.props.authActions.setStatus(true);
                navigation.navigate('Terms');
              }}>
              <Text style={styles.buttonLeft}>{Hebrew.TERMS_OF_USE}</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                this.props.authActions.setStatus(true);
                navigation.navigate('Policy');
              }}>
              <Text style={styles.buttonRight}>{Hebrew.PRIVACY_POLICY}</Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  }
}

Footer.propTypes = {
  scrollView: PropTypes.object,
  navigation: PropTypes.object,
};

Footer.defaultProps = {
  scrollView: {},
  navigation: {},
};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(AuthActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Footer);
