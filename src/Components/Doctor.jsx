import React, { useState } from 'react'
import Speciality from './Speciality'

const Doctor = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const flip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={`doctor ${isFlipped ? 'flipped' : ''}`} onClick={flip}>
      <div className="card-front">
        <img
          src={props.doctor.picture.headshot}
          alt={props.doctor.name.last}
          id="headshot"
        />
        <div id="info">
          <h2>
            {props.doctor.name.title}
            {props.doctor.name.first} {props.doctor.name.last}
          </h2>
          <h3>{props.doctor.name.specialityTitle}</h3>
          <h3>{props.doctor.name.credentials}</h3>
        </div>
        <div className="speciality">
          {typeof props.speciality === 'function' &&
            props.speciality((speciality) => (
              <Speciality speciality={speciality} />
            ))}
        </div>
      </div>
      <div className="card-back">
        <h3>{props.doctor.location.locationName}</h3>
        <p>{props.doctor.location.street}</p>
        <p>
          {props.doctor.location.city}, {props.doctor.location.postCode}
        </p>
        <p>{props.doctor.location.phone}</p>
        <p>{props.doctor.location.email}</p>
      </div>
    </div>
  )
}

export default Doctor
