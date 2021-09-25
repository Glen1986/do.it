import React from 'react'; 
import { Redirect } from 'react-router-dom';

const Dashboard = ({autenticated}) =>{
  if(!autenticated){
    return <Redirect to="/login"/>
  }
  return (
  <div>Dashboard</div>
  );
};
export default Dashboard;
