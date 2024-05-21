import React from 'react'
import Table from 'react-bootstrap/Table';

function FetchingTable({ loadedUsers }) {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  return (
    <Table responsive="sm" className='table table-success table-striped'>
      <thead>
        <tr>
          <th>#</th>
          <th>Full name</th>
          <th>Resort</th>
          <th>Request</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Start date</th>
          <th>End date</th>
        </tr>
      </thead>
      <tbody>
        {loadedUsers.length > 0 ? (
            loadedUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.resort}</td>
                {user.request ? <td>{user.request}</td> : <td>No request</td>}
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>{formatDate(user.startdate)}</td>
                <td>{formatDate(user.enddate)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No reservations found</td>
            </tr>
          )}
      </tbody>
    </Table>
  )
}

export default FetchingTable