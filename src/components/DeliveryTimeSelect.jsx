import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FaMotorcycle } from 'react-icons/fa'

function DeliveryTimeSelect() {
  const [selectedTime, setSelectedTime] = useState('');

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

  return (
    <Form.Group controlId="deliveryTimeSelect">
    <InputGroup>
        <InputGroup.Text id="basic-addon1"><FaMotorcycle /></InputGroup.Text>
      <Form.Select value={selectedTime} onChange={handleTimeChange} aria-label="Default select example">
        <option value="" disabled>Elige la hora de entrega</option>
        {deliveryTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      
      </Form.Select>
      </InputGroup>
    </Form.Group>
  );
}

export default DeliveryTimeSelect