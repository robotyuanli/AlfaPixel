import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from '@actions';
import { bindActionCreators } from 'redux';
import { View, ScrollView, BackHandler } from 'react-native';
import { BaseStyle } from '@config';
import { SafeAreaView, Message } from '@components';
import styles from './styles';

class Inbox extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  onBackPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Landing');
    return true;
  };

  render() {
    const { navigation, auth } = this.props;

    return (
      <SafeAreaView
        style={BaseStyle.safeAreaView}>
        <View style={styles.contain}>
          <ScrollView>
            <Message circleStyle={styles.circle} isRead={false} />
            <Message circleStyle={styles.circle2} isRead={true} />
            <Message circleStyle={styles.circle3} isRead={true} />
            <Message circleStyle={styles.circle4} isRead={false} />
            <Message circleStyle={styles.circle} isRead={false} />
            <Message circleStyle={styles.circle} isRead={true} />
            <Message circleStyle={styles.circle} isRead={false} />
          </ScrollView>
        </View>
      </SafeAreaView>
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
    actions: bindActionCreators(AuthActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
