import React, { useState, useEffect } from 'react';

import { Alert } from 'react-native'

// Library
import styled from 'styled-components/native';

import { PageTitle } from '../Common';


const Question = (props) => {

  const { quiz, onPressNext } = props;

  const [isWrong, setIsWrong] = useState(false);
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const onPressAnswer = (answer) => {
    setDisabled(true);

    if (answer == "O") {
      setActiveOne(true)
    }
    else {
      setActiveTwo(true)
    }

    if (answer == quiz.answer) {
      onPressNext(true);
    }
    else {
      setIsWrong(true);
    }
  }

  useEffect(()=>{
    setIsWrong(false);
    setActiveOne(false);
    setActiveTwo(false);
    setDisabled(false);
  },[quiz])

  return (
    <>
      <Container>
        <QuestionTitle>
          {quiz.question}
        </QuestionTitle>
        <WrongAnswerText>
          {isWrong ? `정답: ${quiz.answer}` : ""}
        </WrongAnswerText>
        <AnswerButton
          disabled={disabled}
          active={activeOne}
          onPress={() => onPressAnswer("O")}
          activeOpacity={0.8}
        >
          <AnswerButtonText>
            O
            </AnswerButtonText>
        </AnswerButton>
        <AnswerButton
          disabled={disabled}
          active={activeTwo}
          onPress={() => onPressAnswer("X")}
          activeOpacity={0.8}
        >
          <AnswerButtonText>
            X
            </AnswerButtonText>
        </AnswerButton>
        {isWrong?(
          <ButtonGroup>
            <RoundButton onPress={()=>Alert.alert("풀이", quiz.description)}>
              <RoundButtonText>
                풀이
              </RoundButtonText>
            </RoundButton>
            <RoundButton onPress={() => onPressNext(false)}>
              <RoundButtonText>
                다음문제
              </RoundButtonText>
            </RoundButton>
          </ButtonGroup>
        ):null}
      </Container>
    </>
  )
}

Question.defaultProps = {
  quiz: {
    question: "영수증은 종이 분리수거가 가능한가요?",
    answer: "X",
    description: "영수증은 재료가 다른 종이이기 때문에 종량제 봉투에 버려야 합니다.",
  },
  onPressNext: () => {}
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: space-between;
`;

const QuestionTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const WrongAnswerText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #f20000;
`;


const AnswerButton = styled.TouchableOpacity`
  background-color: ${props => props.active ? "#b4d39e" : "#c9c9c9"};
  border-radius: 8px;
  align-items: center;
  padding: 6px 0px;
  margin-bottom: 16px;
`;

const AnswerButtonText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;

const ButtonGroup = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

const RoundButton = styled.TouchableOpacity`
  flex: 1;
  border-color: #b4d39e;
  border-width: 4px;
  border-radius: 24px;
  margin: 0px 20px;
  align-items: center;
  padding: 6px 12px;
`;

const RoundButtonText = styled.Text`
  color: #b4d39e;
  font-size: 20px;
  font-weight: bold;
`;


export default Question;