import Card from 'react-bootstrap/Card'

function FeatureCard({ title, location, time, imageUrl }) {
  return (
    <Card
      className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{title}</h3>
        <ul className="d-flex list-unstyled mt-auto">
          <li className="me-auto">
            <img
              src="/twbs.png"
              alt="Bootstrap"
              width="32"
              height="32"
              className="rounded-circle border border-white"
            />
          </li>
          <li className="d-flex align-items-center me-3">
            <i class="bi bi-geo-fill me-2"></i>
            <small>{location}</small>
          </li>
          <li className="d-flex align-items-center">
            <i class="bi bi-calendar3 me-2"></i>
            <small>{time}</small>
          </li>
        </ul>
      </div>
    </Card>
  )
}

export default FeatureCard
