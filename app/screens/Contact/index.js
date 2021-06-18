import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActions } from '@actions';
import { WebView } from 'react-native-webview';
import { View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { BaseStyle, Hebrew, BaseColor } from '@config';
import { Header, SafeAreaView, Footer, Icon, Text } from '@components';
import styles from './styles';
import { ads } from '../../../app.json';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adsShow: true,
    }
  }

  goUp = () => {
    this.refs?._scrollView?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  onClose = () => {
    this.props.authActions.setStatus(false);
  };

  render() {
    const { navigation, auth } = this.props;
    const adsShow = auth.adsShow;

    return (
      <>
        <SafeAreaView
          style={BaseStyle.safeAreaView}>
          <View style={styles.header}>
            <Header navigation={navigation} main={false} onBack={null} />
          </View>
          <ScrollView ref="_scrollView">
            {adsShow && 
              <>
                <TouchableOpacity onPress={this.onClose}>
                  <Icon
                      style={styles.closeIcon}
                      name="times"
                      size={30}
                      color={BaseColor.textSecondaryColor}
                  />
                </TouchableOpacity>
                <WebView
                  useWebKit={true}
                  ref={(ref) => { this.webview = ref; }}
                  style={{ height: 400 }}
                  javaScriptEnabled={true}
                  source={{
                      uri: ads,
                  }}
                  onNavigationStateChange={(event) => {
                    if (event.url !== ads) {
                      this.webview.stopLoading();
                      Linking.openURL(event.url);
                    }
                  }}
                />
              </>
            }
            <Text style={styles.title}> {Hebrew.CONTACT_US} </Text>
            <Text style={styles.subTitle}> {Hebrew.ADDRESS} </Text>
            <Text style={styles.subTitle}> {Hebrew.EMAIL} </Text>
            <Text style={styles.subTitle}> {Hebrew.END} </Text>
            {adsShow  && 
              <Footer
                goUp={this.goUp}
                navigation={navigation}
              />
            }
          </ScrollView>
          {!adsShow  && 
            <Footer
              goUp={this.goUp}
              navigation={navigation}
            />
          }
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(AuthActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
