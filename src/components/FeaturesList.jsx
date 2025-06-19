import { Row, Col } from 'react-bootstrap'
import FeatureCard from './FeatureCard'

function FeaturesList() {
  const features = [
    {
      title: 'Short title, long jacket',
      location: 'Earth',
      time: '3d',
      imageUrl: 'unsplash-photo-1.jpg',
    },
    {
      title: 'Much longer title that wraps to multiple lines',
      location: 'Pakistan',
      time: '4d',
      imageUrl: 'unsplash-photo-2.jpg',
    },
    {
      title: 'Another longer title belongs here',
      location: 'California',
      time: '5d',
      imageUrl: 'unsplash-photo-3.jpg',
    },
  ]

  return (
    <Row lg={3} xs={1} className="align-items-stretch g-4 py-5">
      {features.map((feature, index) => (
        <Col>
          <FeatureCard key={index} {...feature} />
        </Col>
      ))}
    </Row>
  )
}

export default FeaturesList
