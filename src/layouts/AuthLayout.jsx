import { Outlet } from 'react-router'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

import './AuthLayout.css'

function AuthLayout() {
  return (
    <>
      <div
        className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
        style={{ display: 'block', position: 'initial' }}
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-4 shadow">
            <Modal.Body>
              <Outlet />
            </Modal.Body>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthLayout
