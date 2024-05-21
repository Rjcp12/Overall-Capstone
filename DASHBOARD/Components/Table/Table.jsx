import { useEffect, useState } from 'react';

import Compute from './../dashboard/compute.jsx';
import { useHttpClient } from './../http-hook.js';
import ClipLoader from "react-spinners/ClipLoader";
import ErrorModal from './../Shared/ErrorModal.jsx';
import FetchTable from './FetchingTable.jsx';


function ResponsiveBreakpointsExample() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState([]); 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/reservation/',
          'GET'
        );
        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);


  return (
    <>
      {isLoading && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999 }}>
          <ClipLoader size={70} color={"#123abc"} loading={isLoading} />
        </div>
      )}
      <ErrorModal error={error} onClear={clearError} />
      <Compute />
      <div className='container pt-5'>
        <FetchTable loadedUsers={loadedUsers} />
      </div>
    </>
  );
}

export default ResponsiveBreakpointsExample;
