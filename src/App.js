import * as React from 'react'

import { connectSocketServer } from './helpers/connectSocketServer';
import { BandAdd } from './components/BandAdd'
import { BandList } from './components/BandList'


function App() {

  const [socket] = React.useState(connectSocketServer);
  const [online, setOnline] = React.useState(false);


  React.useEffect(() => {
    setOnline(socket.connected)
  }, [socket])

  React.useEffect(() => {
    socket.on('connect', () => {
      setOnline(true)
    })

  }, [socket])

  React.useEffect(() => {
    socket.on('disconnect', () => {
      setOnline(false)
    })
  }, [socket])
  
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

export default App;
