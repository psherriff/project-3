const Doctor = (props) => {
  return (
    <div className="doctor">
      <img
        src={props.doctor.picture.headshot}
        alt={props.doctor.name.last}
        id="headshot"
      >
        <div id="info">
          <h2>
            {props.doctor.name.title}
            {props.doctor.name.first} {props.doctor.name.last}
          </h2>
          <h3>{props.doctor.name.speciality - title}</h3>
          <h3>{props.doctor.name.credentials}</h3>
        </div>
      </img>
    </div>
  )
}

export default Doctor
