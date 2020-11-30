import React, { useState, useRef, useEffect } from 'react';
import { Alert } from 'react-native';

// Library
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'
import { useRecoilState } from 'recoil'
import { communityState, scoreState } from "../../atom";
import moment from 'moment-timezone';
import { Textarea, Form, Input, Item } from "native-base";
import * as ImagePicker from 'react-native-image-picker'

// Component
import { PageTitle } from '../Common';

const CommunityWriteScreen = () => {

  const [hisotry, setHistory] = useRecoilState(communityState);
  const [score, setScore] = useRecoilState(scoreState);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [type, setType] = useState("diary"); 

  const submit = () => {
    const olds = [...hisotry];
    const newHistory = {
      title,
      content,
      date: Date.now(),
      author: "분리수거 1등 고",
      type
    };

    setHistory([newHistory, ...olds])
    setScore(score + 1)
    Actions.pop();
  }

  return (
    <>
      <Container>
        <Row>
          <TypeButton active={type == "diary"} onPress={() => setType("diary")} activeOpacity={0.8}>
            <TypeText>
              일기
            </TypeText>
          </TypeButton>
          <TypeButton active={type == "qna"} onPress={() => setType("qna")} activeOpacity={0.8}>
            <TypeText>
              QnA
            </TypeText>
          </TypeButton>
        </Row>
        <Row>
          <TypeButton active={type == "free"} onPress={() => setType("free")} activeOpacity={0.8}>
            <TypeText>
              자유게시판
            </TypeText>
          </TypeButton>
          <TypeButton active={type == "info"} onPress={() => setType("info")} activeOpacity={0.8}>
            <TypeText>
              정보게시판
            </TypeText>
          </TypeButton>
        </Row>
        <Form>
          <Item regular>
            <Input
              placeholder='제목을 입력해주세요'
              onChangeText={text => setTitle(text)}
            />
          </Item>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="오늘의 분리수거 기록을 작성해주세요"
            onChangeText={text => setContent(text)}
          />
        </Form>
        <SubmitButton onPress={submit}>
          <SubmitText>
            작성하기
          </SubmitText>
        </SubmitButton>
      </Container>
    </>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px 28px;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #b4d39e;
  margin-top: 12px;
  align-items: center;
  padding: 12px 0;
  border-radius: 8px;
`;

const SubmitText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`;

const TypeButton = styled.TouchableOpacity`
  flex: 1;
  border-color: #dcdcdc;
  border-width: 2px;
  border-radius: 8px;
  background-color: ${props => props.active ? "#dcdcdc" : "#fff"};
  margin: 3px;
  
`;

const TypeText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  padding: 8px;
  text-align: center;
`;

const Row = styled.View`
  flex-direction: row;
`;

export default CommunityWriteScreen;