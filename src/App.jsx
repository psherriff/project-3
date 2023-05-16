import './App.css'
import doctors from './doctor.json'
import Doctor from './Components/Doctor'
import Nav from './Components/Nav'
import TopNav from './Components/TopNav'
import Banner from './Components/Banner'
const App = () => {
  return (
    <div className="App">
      <TopNav />
      <Nav />
      <Banner />
      <main>
        {doctors.results.map((doctor) => (
          <Doctor key={doctor.name.last} doctor={doctor} />
        ))}
      </main>
    </div>
  )
}

export default App
