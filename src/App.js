import { Fragment } from 'react'
import NavigationBar from './components/NavigationBar'
import LeftDrawer from './components/LeftDrawer'
// import ReconStatusTable from './components/ReconStatusTable'
import './App.css'
import ReconStatusDataGrid from './components/ReconStatusDataGrid'

const App = () => {
   return (
      <Fragment>
         <NavigationBar />
         <LeftDrawer />
         <ReconStatusDataGrid />
         {/* <ReconStatusTable /> */}
      </Fragment>
   )
}

export default App