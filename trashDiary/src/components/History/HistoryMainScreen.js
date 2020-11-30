import React, {useState, useRef, useEffect} from 'react';
import { Alert } from 'react-native';

// Library
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'
import { useRecoilState } from 'recoil'
import { historyState } from "../../atom";
import moment from 'moment-timezone';
import { Button, Icon, Fab } from 'native-base';

// Component
import { PageTitle } from '../Common';

const HistoryMainScreen = () => {

  const [hisotry, setHistory] = useRecoilState(historyState);

  useEffect(() => {

  },[])

  return (
    <>
      <PageTitle title="오늘의 기록" />
      <Container>
        <HistoryList>
          {hisotry.map((historyDatum, index) => (
            <HistoryItem 
              key={index} 
              activeOpacity={0.7} 
              onPress={()=>{
                Actions.HistoryDetailScreen({
                  historyDatum,
                })
              }}
            >
              <HistoryTitle>
                {historyDatum.title}
              </HistoryTitle>
              <HistoryDate>
                {moment.tz(historyDatum.date, "Asia/Seoul").format("YYYY-MM-DD HH:MM:SS")}
              </HistoryDate>
              <HistoryContent>
                {historyDatum.content}
              </HistoryContent>
            </HistoryItem>
          ))}
        </HistoryList>
        <Fab
          active={true}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#b4d39e' }}
          position="bottomRight"
          onPress={Actions.HistoryWriteScreen}
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
const HistoryContent = styled.Text``;

export default HistoryMainScreen;