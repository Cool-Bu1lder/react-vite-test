/* TODO: 

    [for hero section] - use another example
*/

import Container from 'react-bootstrap/Container'

import FeaturesList from '../../components/FeaturesList'

import './Features.css'

function Features() {
  return (
    <Container className="px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Custom cards</h2>
      <FeaturesList />
    </Container>
  )
}

export default Features
