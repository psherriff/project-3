import './App.css'
import doctors from './doctor.json'
import Doctor from './Components/Doctor'
import Nav from './Components/Nav'
import TopNav from './Components/TopNav'
const App = () => {
  return (
    <div className="App">
      <TopNav />
      <Nav />
      <main>
        {doctors.results.map((doctor) => (
          <Doctor key={doctor.name.last} doctor={doctor} />
        ))}
      </main>
    </div>
  )
}

export default App
