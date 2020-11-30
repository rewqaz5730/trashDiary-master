import React from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Actions } from "react-native-router-flux";
import TabIcon from "./TabIcon";


const CustomTabbar = props => {
  
  const onPressTabBar = (element) => {
    if (element.key !== props.navigation.state.routes[props.navigation.state.index].key){
      Actions[element.key].call()
    }
    else {
      Actions.refresh({scrollToTop: Math.random()})
    }
  }

  return (
    <SafeAreaView >
      <View style={{ flexDirection: "row", width: "100%", height: 50, backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: '#E1E1E1' }}>
        {
          props.navigation.state.routes.map((element) => {
            return (
              <TouchableOpacity style={{ flex: 1 }} key={element.key} onPress={() => onPressTabBar(element)} activeOpacity={0.7}>
                <TabIcon
                  title={element.key}
                  focused={props.navigation.state.routes[props.navigation.state.index].key == element.key ? true : false}
                />

              </TouchableOpacity>
            );
          })
        }
      </View>
    </SafeAreaView>
  );
}


export default CustomTabbar;
