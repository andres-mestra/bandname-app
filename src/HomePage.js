import * as React from 'react'

import { SocketContext } from './context/SocketContext'
import { BandAdd } from './components/BandAdd'
import { BandList } from './components/BandList'


function HomePage() {

  //const [bands, setBands] = React.useState([])
  const { online } = React.useContext(SocketContext)
  
  // React.useEffect(() => {
  //   socket.on('current-bands', (bands) => {
  //     setBands(bands)
  //   })
  // },[socket])

  // const votar = ( id ) => {
  //   socket.emit('votar-banda', id);
  // }

  // const handleDeleteBand = ( id ) => {
  //   socket.emit('delete-banda', id);
  // }

  // const handleChangeName = (id, name) => {
  //   socket.emit('change-name-banda', {id, name})
  // }

  // const handleCreateBand = (name) => {
  //   socket.emit('new-banda', { name })
  // }
  
  
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

        {/* <div className="col-sm-12 col-lg-8">
          <BandList />
        </div> */}
      </div>


    </div>
  );
}

export default HomePage;
