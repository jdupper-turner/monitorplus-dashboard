import { Button, Drawer, LinearProgress, List, ListItem, ListItemText, Typography } from '@mui/material'
import { getNetworksApi } from '../services/NetworkService'
import { Fragment, useEffect, useState } from 'react'


const LeftDrawer = () => {
   const [isLoading, setIsLoading] = useState(false)
   const [networks, setNetworks] = useState([])

   useEffect(() => {
      setIsLoading(true)
      const getNetworks = async () => {
         const { data } = await getNetworksApi()
         setNetworks(data)
      }

      getNetworks().finally(() => setIsLoading(false))
   }, [])


   // toggle
   const anchor = 'left'
   const [state, setState] = useState(false)
   const toggleDrawer = (open) => ((event) => {
      if (!shouldPreventToggle(event)) {
         setState(open)
      }
   })

   console.log(isLoading, networks)

   return (
      <Fragment key={anchor}>
         {/* toggle */}
         <div>
            <Button variant='contained' color='warning' aria-label='filters' onClick={toggleDrawer(true)}>
               Open Networks
            </Button>
         </div>

         {/* drawer */}
         <Drawer anchor={anchor} open={state} onClose={toggleDrawer(false)}>
            <Typography variant='h5' component='h5'>
               Network List
            </Typography>
            <List>
               {networks.length > 0 && networks.map((n, i) => (
                  <ListItem key={i}>
                     <ListItemText>{n.NeilsonNetCode}</ListItemText>
                  </ListItem>
               ))}
            </List>
            {isLoading ? <LinearProgress /> : null}
         </Drawer>
      </Fragment>
   )
}

export default LeftDrawer


// helpers
const shouldPreventToggle = (event) => (
   event.type === 'keydown' && (
      event.key === 'Tab' ||
      event.key === 'Shift'
   )
)
