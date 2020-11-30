import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, SafeAreaView, Text } from 'react-native';

// Library
import IconMD from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";

const propTypes = {
  focused: PropTypes.bool,
  title: PropTypes.string,
};

const defaultProps = {
  focused: false,
  title: '',
  menu_name: ''
};

const TabIcon = props => {

  const Icon = (() => {

    const iconColor = props.focused ? "#b4d39e" : "#bfbfbf";
    const iconSize = 26;

    switch (props.title) {
      case 'HowTo':
        return <IconMD name="recycle" size={iconSize} color={iconColor}/>;
      case 'Quiz':
        return <IconFeather name="help-circle" size={iconSize} color={iconColor} />;
      case 'History':
        return <IconMD name="history" size={iconSize} color={iconColor} />;
      case 'Community':
        return <IconMD name="wechat" size={iconSize} color={iconColor} />;
      case 'MyPage':
        return <IconFeather name="user" size={iconSize} color={iconColor} />;
    }
  });

  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
      <Icon />
    </View>
  );
}

TabIcon.propTypes = propTypes;
TabIcon.defaultProps = defaultProps;

export default TabIcon;
