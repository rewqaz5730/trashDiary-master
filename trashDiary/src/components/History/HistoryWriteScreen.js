import React, {useState, useRef, useEffect} from 'react';
import { Alert } from 'react-native';

// Library
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'
import { useRecoilState } from 'recoil'
import { historyState, scoreState } from "../../atom";
import moment from 'moment-timezone';
import { Textarea, Form, Input, Item } from "native-base";
import * as ImagePicker from 'react-native-image-picker'
import Icon from "react-native-vector-icons/Fontisto";
import RNFetchBlob from 'rn-fetch-blob'

// Component
import { PageTitle } from '../Common';

const HistoryWrite = () => {

  const [hisotry, setHistory] = useRecoilState(historyState);
  const [score, setScore] = useRecoilState(scoreState);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);

  const submit = async () => {
    console.log("image",image)
    const imagePath = `${RNFetchBlob.fs.dirs.DocumentDir}/${makeid()}.jpg`
    await RNFetchBlob.fs.writeFile(imagePath, image, 'base64');
    const olds = [...hisotry];
    const newHistory = {
      title,
      content,
      date: Date.now(),
      image: imagePath
    };

    setHistory([newHistory, ...olds])
    setScore(score + 1)
    Actions.pop();
  }

  const openGallery = () => {
    ImagePicker.default.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 400,
        maxWidth: 400,
      },
      (response) => {
        if (response.data){
          setImage(response.data)
        }
      },
    )
  }

  const makeid = (length = 10) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  return (
    <>
      <Container>
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
          {image ? (
            <Preview source={{uri: "data:image/jpeg;base64,"+image}} />
          ): (
            <ImageButton onPress={openGallery}>
              <Icon name="picture" size={32}/>
            </ImageButton>
          )}
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

const Container = styled.ScrollView`
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

const ImageButton = styled.TouchableOpacity`
  padding-top: 24px;
  padding-bottom: 12px;
  align-items: center;
`;

const Preview = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 10px;
`;

export default HistoryWrite;