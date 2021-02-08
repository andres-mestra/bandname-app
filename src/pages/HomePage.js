import * as React from 'react'

import { SocketContext } from '../context/SocketContext'
import { BandAdd } from '../components/BandAdd'
import { BandList } from '../components/BandList'
import { BandChart } from '../components/BandChart'


function HomePage() {

  const { online } = React.useContext(SocketContext)


  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:{
            online ?
              (<span className="text-success" >Online</span>) :
              (<span className="text-danger" >Offline</span>)
          }
        </p>
      </div>

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-sm-12 col-lg-7">
          <BandChart />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <BandAdd />
        </div>

        <div className="col-sm-12 col-lg-8">
          <BandList />
        </div>
      </div>


    </div>
  );
}

export default HomePage;
