import React from 'react';

// Library
import styled from 'styled-components/native';

export const PageTitle = (props) => {
  const { title } = props;

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

PageTitle.defaultProps = {
  title: ""
}

const Container = styled.View`
  padding: 24px;
`;
const Title = styled.Text`
  color: #b4d39e;
  font-weight: 700;
  font-size: 28px;
`;
