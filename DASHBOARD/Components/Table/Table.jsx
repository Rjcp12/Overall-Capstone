import Table from 'react-bootstrap/Table';
import Header from './../Header/Header.jsx';

function ResponsiveBreakpointsExample() {
  return (
    <>
    <div className='container pt-5'>
      <Table responsive="sm" className='table table-success table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Resort Address</th>
            <th>Username</th>
            <th>Number</th>
            <th>Valid ID</th>
            <th>Business PERMIT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  );
}

export default ResponsiveBreakpointsExample;