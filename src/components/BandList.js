import * as React from 'react'
import { SocketContext } from '../context/SocketContext'
import { BandItem } from './BandItem'

export const BandList = () => {

  const { socket } = React.useContext(SocketContext)
  const [bands, setBands] = React.useState([])
  
  React.useEffect(() => {
    socket.on('current-bands', (bands) => {
      setBands(bands)
    })

    return () => {
      socket.off('current-bands');
    }
    
  },[socket])

  const handleNameChange = ( id, name ) => {
    setBands( ( bands ) => bands.map( band => {
      if( band.id === id ){
        band.name = name
      }
      return band
    }))
    
  }

  //Se dispara cuando se pierde el foco
  const handleOnBlur = ( id, name ) => {
    
    if( name.trim().length > 0 ){
      socket.emit('change-name-banda', { id, name })
    }
  }


  return (
    <>
      <h3>Bandas Actuales</h3>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {
            bands.map(band => {
              return (
                <BandItem
                  key={band.id}
                  nameChange={ handleNameChange }
                  nameOnBlur={ handleOnBlur }
                  {...band}
                />
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}
