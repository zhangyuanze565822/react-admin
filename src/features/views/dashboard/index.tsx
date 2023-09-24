import { columns } from './columns'
import { DataTable } from './data-table'

import tasks from './data/tasks.json'

export default function DashBoard() {
  return (
    <div className="h-full">
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}
