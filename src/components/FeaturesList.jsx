import { Row, Col } from 'react-bootstrap'
import FeatureCard from './FeatureCard'

import unsplashphoto1 from '../assets/unsplash-photo-1.jpg'
import unsplashphoto2 from '../assets/unsplash-photo-2.jpg'
import unsplashphoto3 from '../assets/unsplash-photo-3.jpg'

function FeaturesList() {
  const features = [
    {
      title: 'Short title, long jacket',
      location: 'Earth',
      time: '3d',
      imageUrl: unsplashphoto1,
    },
    {
      title: 'Much longer title that wraps to multiple lines',
      location: 'Pakistan',
      time: '4d',
      imageUrl: unsplashphoto2,
    },
    {
      title: 'Another longer title belongs here',
      location: 'California',
      time: '5d',
      imageUrl: unsplashphoto3,
    },
  ]

  return (
    <Row lg={3} xs={1} className="align-items-stretch g-4 py-5">
      {features.map((feature, index) => (
        <Col key={index}>
          <FeatureCard {...feature} />
        </Col>
      ))}
    </Row>
  )
}

export default FeaturesList
