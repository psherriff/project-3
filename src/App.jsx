import './App.css'
import doctors from './doctor.json'
import Doctor from './Components/Doctor'
const App = () => {
  return (
    <div className="App">
      <h1>Our Doctors</h1>
      <main>
        {doctors.results.map((doctor) => (
          <Doctor key={doctor.name.last} doctor={doctor} />
        ))}
      </main>
    </div>
  )
}

export default App
