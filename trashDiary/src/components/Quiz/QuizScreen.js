import React, {useState, useRef, useEffect} from 'react';
import { Alert } from 'react-native';

// Library
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'
import { useRecoilState } from 'recoil'
import { scoreState } from "../../atom";

// Component
import { PageTitle } from '../Common';
import Question from './Question';

import quizData from './quizData.json';


const QuizScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let [successCount, setSuccessCount] = useState(0);
  const [score, setScore] = useRecoilState(scoreState);

  const next = (correct) => {
    let count = successCount;
    if (correct){
      setSuccessCount(successCount+1);
      count = count + 1;
    }
    if (currentIndex + 1 == quizData.length){
      Actions.QuizResultScreen({
        correntCount: count,
        totalCount: quizData.length
      })
      if (correntCount == totalCount){
        setScore(score + 3)
      }
      else { 
        setScore(score + 1)
      }
      setCurrentIndex(0);
      setSuccessCount(0);
    }
    else { 
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <>
      <PageTitle title="분리수거 QUIZ" />
      <Container>
        <TotalQuestionCount>
          {`${currentIndex + 1} / ${quizData.length}`}
        </TotalQuestionCount>
        <Question
          quiz={quizData[currentIndex]}
          onPressNext={next}
        />
      </Container>
    </>
  )
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 16px 28px;
`;

const TotalQuestionCount = styled.Text`
  color: #a8a9ad;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 16px;
`;

export default QuizScreen;