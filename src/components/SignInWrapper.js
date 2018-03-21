import React from 'react'
import { Paper } from 'material-ui'
import styled from 'styled-components'
import backgroundImg from '../assets/Images/backgrounds/Energy-4_1200x900.png'

import PageWrapper from './PageWrapper'
import RecentBlogPosts from './RecentBlogPosts'

const PaperWrapper = styled(Paper)`
    width: 25%;
    margin-left: 5%;
    margin-top: 7%;
    padding: 20px;
`

const Background = styled.div`
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    width: 1200px;
    height: 900px;
`;


const SignInWrapper = (props) => (
  <PageWrapper signinform='yes'>
    <Background>
      <PaperWrapper zDepth={2}>
        { props.children }
      </PaperWrapper>
      { props.showBlogPosts &&
        <RecentBlogPosts>
        </RecentBlogPosts>
      }
    </Background>
  </PageWrapper>

);

export default SignInWrapper