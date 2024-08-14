import React from 'react'
import { IoIosAlarm } from "react-icons/io";


import Button from 'react-bootstrap/Button';

function OutlineTypesExample() {
  return (
    <div>
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-info">Info</Button>
      <Button variant="outline-light">Light</Button>
      <Button variant="outline-dark">Dark</Button>
    </div>
  );
}



const App = () => {
  return (
    <>
      <IoIosAlarm />

      <OutlineTypesExample />
    </>
  )
}

export default App