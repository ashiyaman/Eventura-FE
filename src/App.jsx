import 'bootstrap/dist/css/bootstrap.min.css' 

import Header from "./components/header"
import EventList from './components/EventList'

const App = () => {
  return(
    <div style={{backgroundColor: '#d4d2cc'}}>
      <Header/>
      <hr/>
      <EventList/>
    </div>
  )
}

export default App