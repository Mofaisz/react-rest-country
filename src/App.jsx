import HomePage from './pages/HomePage'
import '@fortawesome/fontawesome-free/css/all.min.css';
import CountriesListing from './components/CountriesListing';
import { DarkModeProvider } from './components/DarkModeContext';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CountryDetail from './components/CountryDetail';

function App() {

  

  return (
    <>

    <DarkModeProvider>

      <Router>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path='/country' element = {<CountriesListing/>}/>
          <Route path = "/country/:id" element = {<CountryDetail/>}/>
        </Routes>
      </Router>
      
    </DarkModeProvider>

    </>
  )
}

export default App
