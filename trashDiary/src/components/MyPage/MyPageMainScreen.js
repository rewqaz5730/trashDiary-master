import React, { useState, useRef, useEffect } from 'react';
import { Alert } from 'react-native';

// Library
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'
import { useRecoilState } from 'recoil'
import { scoreState } from "../../atom";
import moment from 'moment-timezone';
import { Button, Icon, Fab } from 'native-base';

// Component
import { PageTitle } from '../Common';

// Image
const images = [
  require("../../assets/image/level/level1.png"),
  require("../../assets/image/level/level2.png"),
  require("../../assets/image/level/level3.png"),
  require("../../assets/image/level/level4.png"),
  require("../../assets/image/level/level5.png"),
  require("../../assets/image/level/level6.png"),
  require("../../assets/image/level/level7.png"),
];

const MyPageMainScreen = () => {

  const [score, setScore] = useRecoilState(scoreState);

  useEffect(() => {

  }, [])


  const getLevelImageId = () => {
    let id = Math.floor(score / 5);

    if ( !id || id < 0){
      id = 0;
    }
    if (id > 6){
      id = 6
    }

    return images[id];
  }

  return (
    <>
      <PageTitle title="마이페이지" />
      <Container>
        <LevelImage source={getLevelImageId()} />
        <ScoreText>
          {score} 포인트
        </ScoreText>
      </Container>
    </>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px 28px;
  align-items: center;
`;

const ScoreText = styled.Text`
  color: #b4d39e;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
`;

const LevelImage = styled.Image`
  width: 300px;
  height: 300px;
`;

export default MyPageMainScreen;