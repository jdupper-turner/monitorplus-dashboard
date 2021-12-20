import { LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { getReconStatusApi } from '../services/ReconStatusService'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

const TABLE_HEADERS = ['EntryID', 'Network', 'Recon Date', 'Status', 'Export Complete', 'Total Runs', 'NetworkID', 'Recon Complete', 'Recon Complete Date']
const styles = {
   tableRow: { '&:last-child td, &:last-child th': { border: 0 } }
}

export default function ReconStatusTable() {
   const [isLoading, setIsLoading] = useState(false)
   const [tableRows, setTableRows] = useState([])

   useEffect(() => {
      setIsLoading(true)
      const getRecons = async () => {
         const { data } = await getReconStatusApi()
         setTableRows(data)
      }

      getRecons().finally(() => setIsLoading(false))
   }, [])

   return (
      <TableContainer component={Paper} sx={{ maxHeight: '75vh' }}>
         <Table dense>
            <TableHead>
               <TableRow>
                  {TABLE_HEADERS.map((header, index) => (
                     <TableCell key={index}>
                        {header}
                     </TableCell>
                  ))}
               </TableRow>
            </TableHead>

            <TableBody>
               {tableRows.length > 0 && tableRows.map((row, index) => (
                  <TableRow key={index} sx={styles.tableRow}>
                     <TableCell>{row.EntryID}</TableCell>
                     <TableCell>{row.NeilsonNetCode}</TableCell>
                     <TableCell>{dayjs(row.ReconDate).format('ddd MM/DD')}</TableCell>
                     <TableCell>{row.Status === 'Complete' ? 'Complete' : 'Incomplete'}</TableCell>
                     <TableCell>{row.ExportComplete}</TableCell>
                     <TableCell>{row.NumOfRuns}</TableCell>
                     <TableCell>{row.NetworkID}</TableCell>
                     <TableCell>{row.ReconComplete}</TableCell>
                     <TableCell>{row.ReconCompleteDate ? dayjs(row.ReconCompleteDate).format('ddd MM/DD') : null}</TableCell>
                  </TableRow>
               ))}
            </TableBody>

         </Table>
         {isLoading ? <LinearProgress /> : null}
      </TableContainer>
   )
}
