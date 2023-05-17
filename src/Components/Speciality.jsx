const Speciality = (props) => {
  let color
  switch (props.speciality) {
    case 'Radiation Oncology':
      color = 'red'
      break
    case 'Surgery':
      color = 'orange'
      break
    case 'Medical Oncology':
      color = 'blue'
      break
    case 'Gynaecology':
      color = 'purple'
      break
    case 'Haematology':
      color = 'green'
      break
    default:
      color = 'grey'
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
