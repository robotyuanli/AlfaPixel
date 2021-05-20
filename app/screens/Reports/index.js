import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActions } from '@actions';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { BaseStyle, BaseColor } from '@config';
import { SafeAreaView, Icon, Article, Header, Footer, Carousel } from '@components';
import styles from './styles';
import { ads } from '../../../app.json';

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: false,
      backClick: false,
      uniqueValue: 1,
      position: props.route?.params?.position,
      reports: props.route?.params?.reports,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener('blur', this.onBack);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.slide && !prevState.backClick && prevState.position != nextProps.route?.params?.position) {
      return {
        slide: true,
        uniqueValue: prevState.uniqueValue + 1,
        position: nextProps.route?.params?.position,
        reports: nextProps.route?.params?.reports,
      };
    }
    else {
      return {
        backClick: false,
      };
    }
  }

  onClose = () => {
    this.props.authActions.setStatus(false);
  };

  goUp = () => {
    this.refs?._scrollView?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  onBack = () => {
    this.goUp();
    this.setState({ slide: false, backClick: true });
  }

  render() {
    const { reports, position, uniqueValue } = this.state;
    const { navigation, auth } = this.props;
    const adsShow = auth.adsShow;
    
    let result = [], i;
    const length = reports.length;
    for(i = position + 1 ; i < length ; i ++)
      result.push(reports[i]);
    for(i = 0 ; i < position + 1 ; i ++)
      result.push(reports[i]);

    return (
      <SafeAreaView
        style={BaseStyle.safeAreaView}>
        <View style={styles.header}>
          <Header
            navigation={navigation}
            main={false}
            onBack={this.onBack}
          />
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
                ref={(ref) => { this.webview = ref; }}
                style={{ height: 400 }}
                source={{
                    uri: ads,
                }}
              />
            </>
          }
          <Carousel
            index={0}
            key={uniqueValue}
            style={{height: 1000}}
            ref={carousel => { this._carousel = carousel; }}
            onIndexChanged={({ index, total }) => {
              if(adsShow)
                this.webview.reload();
              this.props.authActions.setStatus(true);
              this.setState({ slide: true });
              this.goUp();
              if (Platform.OS === "ios") {
                const page = index + 1;
                AccessibilityInfo.announceForAccessibility(
                  `Changed to page ${page}/${total}`
                );
              }
            }}
          >
            { result.map((item, index) => <Article key={index} picture={item.images[0].url} title={item.title} data={item.data} />) }
          </Carousel>
          <Footer
            style={styles.footer}
            goUp={this.goUp}
            navigation={navigation}
          />
        </ScrollView>
      </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
