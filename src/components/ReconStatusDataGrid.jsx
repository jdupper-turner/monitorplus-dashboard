import { getReconStatusApi } from '../services/ReconStatusService'
import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import dayjs from 'dayjs'


const tableColumns = [
   { field: 'EntryID', headerName: 'EntryId', editable: false, width: 90 },
   { field: 'NeilsonNetCode', headerName: 'Network', editable: false, width: 90 },
   { field: 'ReconDate', headerName: 'Recon Date', type: 'date', editable: false, width: 125 },
   { field: 'Status', headerName: 'Status', editable: false, width: 90 },
   { field: 'ExportComplete', headerName: 'Exported', editable: false, width: 90 },
   { field: 'NumOfRuns', headerName: 'Total Runs', editable: false, width: 125 },
   { field: 'NetworkID', headerName: 'NetworkId', editable: false, width: 125 },
   { field: 'ReconComplete', headerName: 'Recon Complete', editable: false, width: 150 },
   { field: 'ReconCompleteDate', headerName: 'Recon Complete Date', type: 'date', editable: false, width: 175 },
]


export default function ReconStatusDataGrid() {
   const [isLoading, setIsLoading] = useState(false)
   const [tableRows, setTableRows] = useState([])

   useEffect(() => {
      setIsLoading(true)

      const getRecons = async () => {
         let { data } = await getReconStatusApi()
         data = data.map(formatTableData)
         setTableRows(data)
      }

      getRecons().finally(() => setIsLoading(false))
   }, [])
   
   return (
      <div style={{ height: '75vh', width: '100%' }}>
         <DataGrid
            loading={isLoading}
            density='compact'
            rows={tableRows}
            columns={tableColumns}
            pageSize={65}
            rowsPerPageOptions={[65]}
            disableColumnMenu
         />
      </div>
   );
}

const formatTableData = (data) => {
   return Object.assign({}, data, {
      id: data.EntryID,
      ReconDate: dayjs(data.ReconDate).toDate(),
      ReconCompleteDate: dayjs(data.ReconDate).toDate()
   })
}