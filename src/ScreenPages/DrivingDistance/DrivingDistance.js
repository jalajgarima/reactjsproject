import React, { useState } from 'react'
import axios from 'axios'
import { Button, Container } from 'react-bootstrap'
import AddressAutocomplete from './AddressAutocomplete'
import './DrivingDistance.css'

const DrivingDistance = () => {
  const [addressDrop, setAddressDrop] = useState('')
  const [addressPickup, setAddressPickup] = useState('')
  const [travelDistance, setTravelDistance] = useState('')
  const [displayDistance, setdisplayDistance] = useState(false)

  const clickhandler = () => {
    /* console.log(addressPickup)
    console.log(addressDrop) */
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${addressPickup}&destinations=${addressDrop}&key=API_KEY`
      )
      .then((res) => {
        /* console.log(res)
        console.log(res.data.rows[0].elements[0].distance.value / 1000)
        can find value of time as well */
        setTravelDistance(res.data.rows[0].elements[0].distance.value / 1000)
        setdisplayDistance(true)
      })
      .catch((error) => console.error('Error', error))
  }

  const resethandler = () => {
    setAddressPickup('')
    setAddressDrop('')
    setTravelDistance('')
    setdisplayDistance(false)
  }

  return (
    <Container className="distancecontainer">
      <h4 className="forh3">Address Autocomplete and Driving Distance</h4>
      <div>
        <span className="spanclass">Pick Up Address:</span>
        <AddressAutocomplete
          addressHooks={addressPickup}
          setAddressHooks={setAddressPickup}
        />
      </div>
      <div>
        <span className="spanclass">Drop Off Address:</span>
        <AddressAutocomplete
          addressHooks={addressDrop}
          setAddressHooks={setAddressDrop}
        />
      </div>
      <div>
        <Button className="m-3 bg-primary" onClick={clickhandler}>
          Driving Distance
        </Button>
        <Button className="m-3 bg-primary" onClick={resethandler}>
          Reset
        </Button>
      </div>
      <div>
        <span
          className="spanclass"
          style={displayDistance ? { display: 'block' } : { display: 'none' }}
        >
          Driving Distance: {travelDistance} km
        </span>
      </div>
    </Container>
  )
}

export default DrivingDistance
