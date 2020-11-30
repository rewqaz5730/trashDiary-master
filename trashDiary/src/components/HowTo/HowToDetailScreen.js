import React, {useState, useRef, useEffect} from 'react';
import { Dimensions } from 'react-native';

// Library
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'

// Component
import { PageTitle } from '../Common';

const {width} = Dimensions.get("window");

const HowToDetailScreen = (props) => {
  const { title, image, description } = props;

  return (
    <>
      <Container>
        <CoverImage source={image} />
        <TextArea>
          {description.map(text => (
            <DescriptionText>
              · {text}
            </DescriptionText>
          ))}
        </TextArea>
      </Container>
    </>
  )
}

HowToDetailScreen.defaultProps = {
  title: "종이류",
  image: null,
  description: [
    "각종 영수증에 쓰이는 카본지, 감열지, 코팅 된 종이를 제외한 신문지, 책, 노트, 달력, 포장지, 종이 쇼핑백 등을 물기에 젖지 않도록 하고 끈으로 묶거나 박스류에 담아서 배출해요",
    "이물질이 묻지 않은 종이컵, 종이팩은 내용물을 비운 뒤 일반 종이류와 혼합되지 않게 구분하여 배출해 주세요.",
    "담배꽁초, 음식물 등 이물질이 있는 경우 일반 종량제 봉투로 배출해주세요.",
  ],
}

const Container = styled.ScrollView`
  flex: 1;
  position: relative;
  background-color: #fff;
  padding: 16px 16px;
`;

const TextArea = styled.View`
  flex-wrap: wrap;
  margin-top: 16px;
`;

const DescriptionText = styled.Text`
  width: 100%;
  margin-bottom: 8px;
`;

const CoverImage = styled.Image`
  width: ${width - 36};
  height: 300px;
`;

export default HowToDetailScreen;