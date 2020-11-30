import React, { useState, useRef, useEffect } from 'react';
import { Dimensions, Alert } from 'react-native';

// Library
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'
import moment from 'moment-timezone';
import { useRecoilState } from 'recoil'
import { historyState } from "../../atom";
import RNFetchBlob from 'rn-fetch-blob'

// Component
import { PageTitle } from '../Common';

const { width } = Dimensions.get("window");

const HistoryDetailScreen = (props) => {
  const { historyDatum } = props;
  const [hisotry, setHistory] = useRecoilState(historyState);
  const [image, setImage] = useState(null);

  const remove = () => {
    Alert.alert(
      "삭제",
      "정말 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "확인", onPress: () => {
            const filtered = hisotry.filter(item => item.date != historyDatum.date);
            setHistory(filtered);
            Actions.pop();
          }
        }
      ],
      { cancelable: false }
    );
  }

  useEffect(()=>{
    RNFetchBlob.fs.readFile(historyDatum.image, 'base64').then((response)=>{
      console.log("response.data", response)
      setImage(response);
    })

  },[])
  
  return (
    <>
      <Container>
        <HistoryItem
          activeOpacity={1}
        >
          <HistoryTitle>
            {historyDatum.title}
          </HistoryTitle>
          <HistoryDate>
            {moment.tz(historyDatum.date, "Asia/Seoul").format("YYYY-MM-DD HH:MM:SS")}
          </HistoryDate>
          {image?(
            <Image source={{uri: "data:image/jpeg;base64," + image}}/>
          ): null}
          <HistoryContent>
            {historyDatum.content}
          </HistoryContent>
        </HistoryItem>
        <RemoveButton onPress={remove}>
          <RemoveText>
            삭제
          </RemoveText>
        </RemoveButton>
      </Container>
    </>
  )
}

const Container = styled.ScrollView`
  flex: 1;
  position: relative;
  background-color: #fff;
  padding: 16px 16px;
`;

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
const HistoryContent = styled.Text`
  margin-top: 10px;
`;

const RemoveButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

const RemoveText = styled.Text`

`;

const Image = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 10px;
`;

export default HistoryDetailScreen;