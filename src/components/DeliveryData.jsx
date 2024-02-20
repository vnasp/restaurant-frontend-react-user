import { useContext, useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap'
import { FaMotorcycle } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { DataContext } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

function DeliveryData() {
  const { deliveryAddress, setDeliveryAddress, total, setCart, setShowCart, setOrderDetails } = useContext(DataContext)
  const [ selectedTime, setSelectedTime] = useState('')
const navigate = useNavigate()

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const deliveryTimes = [
    "Lo antes posible",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "18:00 - 19:00",
    "19:00 - 20:00",
    "20:00 - 21:00",
    "21:00 - 22:00",
    "21:00 - 23:00"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
      const orderDetails = {
        selectedTime,
        deliveryAddress,
        total
      }
      setOrderDetails(orderDetails)
      setCart([])
      setShowCart(false)
      navigate(`/confirmacion/`)
      }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formAddress">
        <InputGroup>
          <InputGroup.Text id="basic-addon1"><MdLocationOn /></InputGroup.Text>
          <Form.Control
            placeholder="Dirección de entrega"
            aria-label="address"
            aria-describedby="basic-addon1"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            required
          />
        </InputGroup>
      </Form.Group>
      <Form.Group controlId="deliveryTimeSelect">
        <InputGroup>
          <InputGroup.Text id="basic-addon1"><FaMotorcycle /></InputGroup.Text>
          <Form.Select value={selectedTime} onChange={handleTimeChange} aria-label="Default select example" required>
            <option value="" disabled>Elige la hora de entrega</option>
            {deliveryTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </Form.Select>
        </InputGroup>
      </Form.Group>
      <Button className="btn secondary w-100 fs-4 mt-4" type="submit">Crear Orden</Button>
    </Form>
  );
}

export default DeliveryData