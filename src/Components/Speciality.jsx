const Speciality = (props) => {
  let color
  switch (props.speciality) {
    case 'Radiation Oncology':
      color = '#c66ba8'
      break
    case 'Surgery':
      color = '#ea5d67'
      break
    case 'Medical Oncology':
      color = '#f48d32'
      break
    case 'Gynaecology':
      color = '#31a2de'
      break
    case 'Haematology':
      color = '#f48d32'
      break
    default:
      color = '#726f69'
  }
  return (
    <h4
      style={{
        backgroundColor: color,
        color: 'black',
        padding: '4px',
        borderRadius: '4px',
        marginRight: '8px'
      }}
    >
      {props.speciality}
    </h4>
  )
}

export default Speciality
