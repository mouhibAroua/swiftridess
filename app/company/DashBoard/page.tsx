import React from 'react';
import Sidenav from "./Sidenav"
import Charts from "./Charts"
import AllVehicles from "./AllVehicles"

const MainPage: React.FC = () => {
  return (
    <div>
        <Sidenav />
        <Charts/>
        <AllVehicles/>
      </div>
  );
};

export default MainPage;
