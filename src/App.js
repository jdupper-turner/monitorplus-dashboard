import { Fragment } from 'react'
import NavigationBar from './components/NavigationBar'
import LeftDrawer from './components/LeftDrawer'
import ReconStatusTable from './components/ReconStatusTable'
import './App.css'

const App = () => {
   return (
      <Fragment>
         <NavigationBar />
         <LeftDrawer />
         <ReconStatusTable />
      </Fragment>
   )
}

export default App