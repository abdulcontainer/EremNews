import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import styles from './SelectedUsers.module.css'

const SelectedUsers = ({selectedUsers}) => {

  return (
    <div className={styles.selectedUserWrapper}>
      <p>Selected User List</p>
      <div className={styles.tablesWrapper}>
        <UserTable title='Users' data={selectedUsers?.filter(item => item.isUser)}/>
        <UserTable title='Not Users' data={selectedUsers?.filter(item => !item.isUser)}/>
      </div>
    </div>
  )
}

export default SelectedUsers

// table component
const UserTable = ({title, data}) => (
  <>
    {data?.length > 0 && 
      <div>
        <h4>{title}</h4>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >ID</TableCell>
              <TableCell >Name</TableCell>
              <TableCell >User Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.isUser ? 'True' : 'False'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    }
  </>
)