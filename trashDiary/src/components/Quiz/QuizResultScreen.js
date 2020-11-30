import React, {useEffect} from 'react';

// Library
import styled from 'styled-components/native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { Actions } from 'react-native-router-flux';

// Component
import { PageTitle } from '../Common';


const QuizResultScreen = (props) => {
  const {correntCount, totalCount} = props;
  return (
    <>
      <PageTitle title="분리수거 QUIZ" />
      <Container>
        <InfoText>
          Score
        </InfoText>
        <ScoreText>
          {parseInt(correntCount/totalCount*100)}
        </ScoreText>
        <DescriptionText>
          {`${totalCount}문제 중 ${correntCount}문제를 맞혔습니다.`}
        </DescriptionText>
        <Button onPress={() => Actions.pop()}>
          <Icon name="redo" size={50} color="#fff" />
          <ButtonText>
            다시 풀기
          </ButtonText>
        </Button>
      </Container>
    </>
  )
}

QuizResultScreen.defaultProps = {
  correntCount: 10,
  totalCount: 20
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px 28px;
  justify-content: center;
`;

const InfoText = styled.Text`
  text-align: center;
  color: #000;
  font-weight: 700;
  font-size: 21px;
`;

const ScoreText = styled.Text`
  text-align: center;
  color: #b4d39e;
  font-weight: 700;
  font-size: 55px;
  margin-bottom: 36px;
`;

const DescriptionText = styled.Text`
  text-align: center;
  color: #000;
  font-weight: 700;
  font-size: 18px;
`;

const Button = styled.TouchableOpacity`
  width: 80px;
  height: 95px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: #b4d39e;
  border-radius: 8px;
  align-self: center;
`;

const ButtonText = styled.Text`
  font-weight: 700;
  font-size: 18px;
  margin-top: 8px;
  color: #fff;
`;

export default QuizResultScreen;