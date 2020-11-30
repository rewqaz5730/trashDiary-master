import React, {useState, useRef, useEffect} from 'react';
import { Alert } from 'react-native';

// Library
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'

// Component
import { PageTitle } from '../Common';

import howToData from './howToData';


const HowToScreen = () => {
  return (
    <>
      <PageTitle title="분리수거 방법" />
      <Container>
        <MaterialList
          contentContainerStyle={{
            flexDirection: "row", 
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {howToData.map(item => (
            <MaterialButton 
              onPress={() => Actions.HowToDetailScreen({
                title: item.title,
                image: item.image,
                description: item.description,
              })}
            >
              <MaterialImage source={item.image} resizeMode="cover"/>
              <Label>
                <LabelText>
                  {item.title}
                </LabelText>
              </Label>
            </MaterialButton>
          ))}
        </MaterialList>
      </Container>
    </>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px 16px;
`;

const MaterialList = styled.ScrollView``;

const MaterialButton = styled.TouchableOpacity`
  position: relative;
  width: 44%;
  height: 130px;
  margin: 10px 2%;
`;

const MaterialImage = styled.Image`
  width: 100%;
  height: 130px;
`;

const Label = styled.View`
  flex: 0 50%;
  width: 100%;
  height: 35px;
  background-color: rgba(180,211,158, 0.7);
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const LabelText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 18px;
`;

export default HowToScreen;