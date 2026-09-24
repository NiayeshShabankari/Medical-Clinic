import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={}/>
          <Route path='/login' element={}/>
          <Route path='/reserveing' element={}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
