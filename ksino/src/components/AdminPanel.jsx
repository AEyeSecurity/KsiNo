import { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { LANDING_CONFIG, addCajero, updatePercentages } from '../config/landingConfig'
import './AdminPanel.scss'

const AdminPanel = () => {
  const [percentages, setPercentages] = useState(LANDING_CONFIG.traffic.percentages)
  const [newCajero, setNewCajero] = useState({ number: '', message: '', percentage: 0 })
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' })

  const handlePercentageChange = (index, value) => {
    const newPercentages = [...percentages]
    newPercentages[index] = parseInt(value) || 0
    setPercentages(newPercentages)
  }

  const savePercentages = () => {
    const total = percentages.reduce((sum, p) => sum + p, 0)
    if (total !== 100) {
      setAlert({ show: true, message: 'Los porcentajes deben sumar 100%', type: 'danger' })
      return
    }
    
    updatePercentages(percentages)
    setAlert({ show: true, message: 'Porcentajes actualizados correctamente', type: 'success' })
  }

  const addNewCajero = () => {
    if (!newCajero.number || !newCajero.message || newCajero.percentage <= 0) {
      setAlert({ show: true, message: 'Todos los campos son obligatorios', type: 'danger' })
      return
    }

    addCajero(newCajero.number, newCajero.message, newCajero.percentage)
    setNewCajero({ number: '', message: '', percentage: 0 })
    setPercentages(LANDING_CONFIG.traffic.percentages)
    setAlert({ show: true, message: 'Cajero agregado correctamente', type: 'success' })
  }

  return (
    <Container className="admin-panel">
      <Row>
        <Col xs={12}>
          <h2 className="text-center mb-4">Panel de Administración - Imperial Luck</h2>
          
          {alert.show && (
            <Alert variant={alert.type} dismissible onClose={() => setAlert({ show: false })}>
              {alert.message}
            </Alert>
          )}

          <Card className="mb-4">
            <Card.Header>
              <h4>Distribución de Tráfico Actual</h4>
            </Card.Header>
            <Card.Body>
              {LANDING_CONFIG.traffic.whatsappNumbers.map((cajero, index) => (
                <Row key={index} className="mb-3">
                  <Col md={3}>
                    <Form.Label>Cajero {index + 1}</Form.Label>
                    <Form.Control
                      type="text"
                      value={cajero.number}
                      readOnly
                      className="form-control-sm"
                    />
                  </Col>
                  <Col md={5}>
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      type="text"
                      value={cajero.message}
                      readOnly
                      className="form-control-sm"
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Label>Porcentaje (%)</Form.Label>
                    <Form.Control
                      type="number"
                      value={percentages[index]}
                      onChange={(e) => handlePercentageChange(index, e.target.value)}
                      className="form-control-sm"
                    />
                  </Col>
                  <Col md={2} className="d-flex align-items-end">
                    <Button variant="outline-danger" size="sm">
                      Eliminar
                    </Button>
                  </Col>
                </Row>
              ))}
              
              <div className="text-center mt-3">
                <Button variant="primary" onClick={savePercentages}>
                  Guardar Cambios
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h4>Agregar Nuevo Cajero</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Número de WhatsApp</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej: 1234567890"
                      value={newCajero.number}
                      onChange={(e) => setNewCajero({ ...newCajero, number: e.target.value })}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Mensaje de WhatsApp"
                      value={newCajero.message}
                      onChange={(e) => setNewCajero({ ...newCajero, message: e.target.value })}
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group>
                    <Form.Label>Porcentaje (%)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0"
                      value={newCajero.percentage}
                      onChange={(e) => setNewCajero({ ...newCajero, percentage: parseInt(e.target.value) || 0 })}
                    />
                  </Form.Group>
                </Col>
                <Col md={2} className="d-flex align-items-end">
                  <Button variant="success" onClick={addNewCajero}>
                    Agregar
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminPanel
