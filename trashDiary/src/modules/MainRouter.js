import React from 'react';
import { Tabs, Scene, Router } from 'react-native-router-flux';

// Components
import CustomTabbar from '../components/Router/CustomTabbar'
import QuizScreen from '../components/Quiz/QuizScreen'
import QuizResultScreen from '../components/Quiz/QuizResultScreen'

import HowToScreen from '../components/HowTo/HowToScreen'
import HowToDetailScreen from '../components/HowTo/HowToDetailScreen'

import HistoryMainScreen from '../components/History/HistoryMainScreen'
import HistoryWriteScreen from '../components/History/HistoryWriteScreen'
import HistoryDetailScreen from '../components/History/HistoryDetailScreen'

import CommunityMainScreen from '../components/Community/CommunityMainScreen'
import CommunityWriteScreen from '../components/Community/CommunityWriteScreen'
import CommunityDetailScreen from '../components/Community/CommunityDetailScreen'

import MyPageMainScreen from '../components/MyPage/MyPageMainScreen'

const MainRouter = () => {
  return (
    <Router >
      <Scene key="root" hideNavBar>
        <Tabs
          key="tabBar"
          tabBarComponent={CustomTabbar}
        >
          <Scene 
            key="HowTo"
            title="분리수거 방법"
            component={HowToScreen}
            hideNavBar
            />
          <Scene 
            key="Quiz"
            title="분리수거 퀴즈"
            component={QuizScreen}
            hideNavBar
            />
          <Scene 
            key="History"
            title="분리수거 기록"
            component={HistoryMainScreen}
            hideNavBar
            />
          <Scene 
            key="Community"
            title="커뮤니티"
            component={CommunityMainScreen}
            hideNavBar
          />
          <Scene 
            key="MyPage"
            title="마이페이지"
            component={MyPageMainScreen}
            hideNavBar
          />
        </Tabs>
        <Scene
          key="QuizResultScreen"
          component={QuizResultScreen}
        />
        <Scene
          key="HowToDetailScreen"
          component={HowToDetailScreen}
          hideNavBar={false}
        />
        <Scene
          key="HistoryWriteScreen"
          component={HistoryWriteScreen}
          hideNavBar={false}
          title="작성하기"
        />
        <Scene
          key="HistoryDetailScreen"
          component={HistoryDetailScreen}
          hideNavBar={false}
          title="오늘의 기록"
        />
        <Scene
          key="CommunityWriteScreen"
          component={CommunityWriteScreen}
          hideNavBar={false}
          title="작성하기"
        />
        <Scene
          key="CommunityDetailScreen"
          component={CommunityDetailScreen}
          hideNavBar={false}
          title="커뮤니티"
        />
      </Scene>
    </Router>
  )
}

export default MainRouter;