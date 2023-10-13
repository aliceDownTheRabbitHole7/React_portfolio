import './App.css'
import ContactInfo from './components/ContactInfo'
import SideBar from './components/SideBar/SideBar'
import Projects from './components/Projects/Projects'


function App() {
  return (
    <div className='container'>
      <ContactInfo />
      <div className="row">
        <div className="col-md-4">
          <SideBar />
        </div>
        <div className="col-md-8">
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App
