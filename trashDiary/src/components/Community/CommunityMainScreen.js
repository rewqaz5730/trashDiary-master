import React, { useState, useRef, useEffect } from 'react';
import { Alert } from 'react-native';

// Library
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'
import { useRecoilState } from 'recoil'
import { communityState } from "../../atom";
import moment from 'moment-timezone';
import { Button, Icon, Fab } from 'native-base';

// Component
import { PageTitle } from '../Common';

const CommunityMainScreen = () => {

  const [history, setHistory] = useRecoilState(communityState);
  const [type, setType] = useState("diary"); 

  useEffect(() => {

  }, [])

  return (
    <>
      <PageTitle title="커뮤니티" />
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
          <TypeButton active={type == "info"}  onPress={() => setType("info")} activeOpacity={0.8}>
            <TypeText>
              정보게시판
            </TypeText>
          </TypeButton>
        </Row>
        <HistoryList contentContainerStyle={{paddingTop: 15}}>
          {history.filter(item => item.type == type).map((historyDatum, index) => (
            <HistoryItem
              key={index}
              activeOpacity={0.7}
              onPress={() => {
                Actions.CommunityDetailScreen({
                  historyDatum,
                })
              }}
            >
              <HistoryTitle>
                {historyDatum.title}
              </HistoryTitle>
              <Row>
                <HistoryAuthor>
                  {historyDatum.author + " | "} 
                </HistoryAuthor>
                <HistoryDate>
                  {moment.tz(historyDatum.date, "Asia/Seoul").format("YYYY-MM-DD HH:MM:SS")}
                </HistoryDate>
              </Row>
              <HistoryContent>
                {historyDatum.content}
              </HistoryContent>
            </HistoryItem>
          ))}
        </HistoryList>
        <Fab
          active={true}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#b4d39e' }}
          position="bottomRight"
          onPress={Actions.CommunityWriteScreen}
        >
          <Icon name="pencil" />
        </Fab>
      </Container>
    </>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px 28px;
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

const HistoryList = styled.ScrollView``;

const HistoryItem = styled.TouchableOpacity`
  margin-bottom: 36px;
`;
const HistoryTitle = styled.Text`
  font-weight: bold;
  font-size: 26px;
`;
const HistoryDate = styled.Text`
  color: #a8a9ad;
  margin-bottom: 8px;
`;
const HistoryAuthor = styled.Text`
  color: #a8a9ad;
  margin-bottom: 8px;
`;
const HistoryContent = styled.Text``;

const Row = styled.View`
  flex-direction: row;
`;

export default CommunityMainScreen;