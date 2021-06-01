import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActions } from '@actions';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { UserServices } from '../../services';
import { View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
  Category,
  Footer,
  Header,
  SearchBar,
  Icon,
} from '@components';
import { BaseColor, BaseStyle } from '@config';
import styles from './styles';
import { ads } from '../../../app.json';

let result = [];

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rootGuid: '',
      keyValue: '',
      clickSearch: false,
      loading: true,
      showSearchBar: false,
      rootList: {},
      categoryList: {},
    };
  }

  componentDidMount() {
    this.getCategoryList(0);
    this.props.authActions.setStatus(true);
  }

  getCategoryList = (id) => {
    UserServices.getCategories(id)
      .then((response) => {
        this.setState({
            ...this.state,
          loading: false,
          rootGuid: response.data.guid,
          rootList: response.data,
          categoryList: response.data,
        });
      })
      .catch((error) => {
        // console.log(error.response);
      });
  };

  componentWillUnmount() {
    // this.backHandler.remove();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.clickSearch) {
      return {
        clickSearch: false,
      }
    }
    else if(nextProps?.route?.params?.home && !prevState.clickSearch) {
      return {
        keyValue: '',
        showSearchBar: false,
        categoryList: prevState.rootList,
      };
    }
    else {
      return {};
    }
  }

  goUp = () => {
    this.refs?._scrollView?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  onClickSetting = () => {
    // console.log('Setting Button Clickes');
    //setting buttion clicked
  };

  onCloseSearchBox = () => {
    const { rootList } = this.state;
    this.setState({
      ...this.state,
      keyValue: '',
      showSearchBar: false,
      categoryList: rootList,
    });
  };

  onClickSearch = () => {
    this.setState({
      ...this.state,
      keyValue: '',
      clickSearch: true,
      showSearchBar: true,
    });
  };

  searchText = (data, keyword) => {
    let i;
    let reports = data.reports;
    for (i = 0; i < reports.length; i++) {
      let report = reports[i];
      if (report.title.search(keyword) >= 0)
        result.push(report);
    }
    const length = data.children.length;
    for (i = 0; i < length; i++) {
      this.searchText(data.children[i], keyword);
    }
  };

  onChangeText = (keyword) => {
    const { rootList } = this.state;
    if (keyword !== '') {
      result = [];
      this.searchText(rootList, keyword);
      this.setState({
        ...this.state, categoryList: result, keyValue: keyword });
    } else {
      this.setState({ 
        ...this.state, categoryList: rootList, keyValue: keyword });
    }
    this.props.navigation.navigate('Landing', { home: false });
  };

  updateCategories = (categoryList) => {
    this.setState({ ...this.state, categoryList: categoryList });
  };

  onClose = () => {
    this.props.authActions.setStatus(false);
  };

  render() {
    const { navigation, auth } = this.props;
    const adsShow = auth.adsShow;
    const {
      keyValue,
      loading,
      showSearchBar,
      categoryList,
    } = this.state;
    let result = [];
    if(keyValue !== '')
        result = categoryList;
    else {
        if(categoryList.children?.length > 0)
            result = categoryList.children;
        if(categoryList.reports?.length > 0)
            result = categoryList.reports;
    }

    return (
      <SafeAreaView
        style={BaseStyle.safeAreaView}>
        <StatusBar
          hidden={false}
          barStyle={'dark-content'}
          backgroundColor={'white'}
        />
        <View style={styles.header}>
          {!showSearchBar && (
            <Header
              navigation={navigation}
              onClickSearch={this.onClickSearch}
              main={true}
              onBack={null}
            />
          )}
          {showSearchBar && (
            <SearchBar
              onCloseSearchBox={this.onCloseSearchBox}
              keyValue={keyValue}
              onChangeText={this.onChangeText}
            />
          )}
        </View>
        <ScrollView ref="_scrollView">
          <View style={styles.container}>
            {loading ? (
              <ActivityIndicator
                size={'large'}
                style={styles.indicator}
                color={BaseColor.blueColor}
              />
            ) : (
              <View>
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
                      style={{ height: 400 }}
                      source={{
                          uri: ads,
                      }}
                    />
                  </>
                }
                {keyValue !== '' && categoryList.length > 0 && 
                  categoryList.map((item, index) => (
                    <Category
                      key={index}
                      position={index}
                      parent={false}
                      name={item.title}
                      picture={item.images[0].url}
                      navigation={navigation}
                      categoryList={categoryList}
                      type={2}
                      keyword={keyValue}
                      updateCategories={this.updateCategories}
                    />
                ))}
                {keyValue === '' && (
                  <>
                    <Category
                      parent={true}
                      name={categoryList.name}
                      picture={categoryList.picture}
                      navigation={navigation}
                      type={1}
                    />
                    {categoryList.children?.length > 0 &&
                      categoryList.children.map((item, index) => (
                        <Category
                          key={index}
                          position={index}
                          parent={false}
                          name={item.name}
                          picture={item.picture}
                          navigation={navigation}
                          categoryList={categoryList}
                          type={1}
                          updateCategories={this.updateCategories}
                        />
                      ))}
                    {categoryList.reports?.length > 0 && 
                      categoryList.reports.map((item, index) => (
                        <Category
                          key={index}
                          position={index}
                          parent={false}
                          name={item.title}
                          picture={item.images[0].url}
                          navigation={navigation}
                          categoryList={categoryList.reports}
                          type={0}
                          keyword={keyValue}
                          updateCategories={this.updateCategories}
                        />
                    ))}
                  </>
                )}
              </View>
            )}
          </View>
          {!loading && (adsShow || (!adsShow && result.length > 2)) &&
            <Footer
              goUp={this.goUp}
              navigation={navigation}
            />
          }
        </ScrollView>
        {(loading || (!adsShow && result.length < 3)) && 
            <Footer
                goUp={this.goUp}
                navigation={navigation}
            />
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
