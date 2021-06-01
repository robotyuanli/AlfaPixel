import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from '@actions';
import { bindActionCreators } from 'redux';
import { View, SectionList, CheckBox } from 'react-native';
import { BaseStyle, BaseColor, Hebrew } from '@config';
import { SafeAreaView, Icon, Text } from '@components';
import styles from './styles';

const DATA = [
  {
    title: Hebrew.NOTIFICATION,
    data: [Hebrew.SHOW_HIDE],
  },
  {
    title: Hebrew.LANGUAGE,
    data: [Hebrew.ENGLISH],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    {title === Hebrew.SHOW_HIDE && (
      <View style={styles.rowContainer}>
        <CheckBox value={false} style={styles.checkbox} />
        <Text style={styles.title}>{title}</Text>
      </View>
    )}
    {title !== Hebrew.SHOW_HIDE && <Text style={styles.title}>{title}</Text>}
  </View>
);

class Settings extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: false,
    };
  }

  onChangePassword = () => {
    const { navigation } = this.props;

    navigation.navigate('ChangePassword');
  };

  onSignout = () => {
    const { actions, navigation } = this.props;

    actions.logout(() => {
      navigation.navigate('Walkthrough');
    });
  };

  render() {
    const { navigation, auth } = this.props;

    return (
      <>
        <SafeAreaView
          style={BaseStyle.safeAreaView}>
          <View>
            <View style={styles.header}>
              <Icon
                style={styles.settingIcon}
                name="align-justify"
                size={25}
                color={BaseColor.whiteColor}
              />
              <Text style={styles.title}> {Hebrew.SETTINGS} </Text>
              <Icon
                style={styles.searchIcon}
                name="angle-left"
                size={25}
                color={BaseColor.textSecondaryColor}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
            <View style={styles.sectionList}>
              <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                  <Text style={styles.section}>{title}</Text>
                )}
              />
            </View>
          </View>
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AuthActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
