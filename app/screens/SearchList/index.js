import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActions } from '@actions';
import { View, ScrollView } from 'react-native';
import { BaseStyle } from '@config';
import { SafeAreaView, Article, Header, Footer, Carousel } from '@components';
import styles from './styles';

class SearchList extends Component {
  constructor(props) {
    super();
    this.state = {
      slide: false,
      backClick: false,
      uniqueValue: 1,
      keyword: props.route?.params?.keyword,
      position: props.route?.params?.position,
      categoryList: props.route?.params?.categoryList,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener('blur', this.onBack);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.keyword !== nextProps.route?.params?.keyword || 
      (!prevState.slide && !prevState.backClick && prevState.position != nextProps.route?.params?.position)) {
      return {
        slide: true,
        uniqueValue: prevState.uniqueValue + 1,
        position: nextProps.route?.params?.position,
        keyword: nextProps.route?.params?.keyword,
        categoryList: nextProps.route?.params?.categoryList,
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

  onBack = () => {
    this.setState({ slide: false, backClick: true });
  }

  render() {
    const { categoryList, uniqueValue, position } = this.state;
    const { navigation, auth } = this.props;

    let result = [], i;
    const length = categoryList.length;
    for(i = position + 1 ; i < length ; i ++)
      result.push(categoryList[i]);
    for(i = 0 ; i < position + 1 ; i ++)
      result.push(categoryList[i]);

    return (
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        forceInset={{ top: 'never' }}>
        <View style={styles.header}>
          <Header
            navigation={navigation}
            main={false}
            onBack={this.onBack}
          />
        </View>
        <ScrollView ref="_scrollView">
          <Carousel
            index={0}
            key={uniqueValue}
            style={{height: 1000}}
            onIndexChanged={({ index, total }) => {
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
            {result.map((item, index) => <Article key={index} picture={item.images[0].url} title={item.title} data={item.data} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);