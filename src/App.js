import { Fragment } from 'react'
import NavigationBar from './components/NavigationBar'
import ReconStatusTable from './components/ReconStatusTable'
import './App.css'

const App = () => {
   return (
      <Fragment>
         <NavigationBar />
         <ReconStatusTable />
      </Fragment>
   )
}

export default App