import { Button, Drawer, Typography } from '@mui/material'
import { Fragment, useState } from 'react'


const LeftDrawer = () => {
   // toggle
   const anchor = 'left'
   const [state, setState] = useState(false)
   const toggleDrawer = (open) => ((event) => {
      if (!shouldPreventToggle(event)) {
         setState(open)
      }
   })

   return (
      <Fragment key={anchor}>
         {/* toggle */}
         <div>
            <Button variant='contained' color='warning' aria-label='filters' onClick={toggleDrawer(true)}>
               Open Networks
            </Button>
         </div>
         <Drawer anchor={anchor} open={state} onClose={toggleDrawer(false)}>
            <Typography variant='h5' component='h5'>
               Network List
            </Typography>
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
