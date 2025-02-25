import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ListItem,
  ThumbNailItem,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  Dot,
  ViewsAndDate,
} from './styledComponents'

import './index.css'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumnnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} className="Link">
            <ListItem>
              <ThumbNailItem src={thumnnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} views <Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideoCard
