import { AppBar, Toolbar, Typography } from '@mui/material'
import { AccessTime } from '@mui/icons-material'
import { Fragment, useState } from 'react'
import dayjs from 'dayjs'


const NavigationBar = () => {
   return (
      <Fragment>
         <AppBar position='sticky'>
            <Toolbar>
               <Typography sx={{ flexGrow: 1 }}>
                  MonitorPlus Dashboard
               </Typography>
               <CurrentTime />
            </Toolbar>
         </AppBar>
      </Fragment>
   )
}

const CurrentTime = () => {
   const [now, setNow] = useState(new Date())
   const updateTime = () => setNow(new Date())
   setTimeout(() => updateTime(), 1000)

   return (
      <Fragment>
         <AccessTime />
         &nbsp;
         <Typography>
            {dayjs(now).format('dddd, MMMM DD YYYY, HH:mm:ss')}
         </Typography>
      </Fragment>
   )
}

export default NavigationBar