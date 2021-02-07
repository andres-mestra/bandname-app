import * as React from 'react'

import { connectSocketServer } from './helpers/connectSocketServer';
import { BandAdd } from './components/BandAdd'
import { BandList } from './components/BandList'


function App() {

  const [socket] = React.useState(connectSocketServer);
  const [online, setOnline] = React.useState(false);
  const [bands, setBands] = React.useState([])


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

  React.useEffect(() => {
    socket.on('current-bands', (bands) => {
      setBands(bands)
    })
  },[socket])

  const votar = ( id ) => {
    socket.emit('votar-banda', id);
  }

  const handleDeleteBand = ( id ) => {
    socket.emit('delete-banda', id);
  }
  
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
          <BandList 
            data={ bands }
            votar={ votar }
            deleteBand={ handleDeleteBand }
          />
        </div>
      </div>


    </div>
  );
}

export default App;
