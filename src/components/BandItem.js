import * as React from 'react'
import { SocketContext } from '../context/SocketContext';

export const BandItem = ({ id, name, votes, nameChange, nameOnBlur }) => {

  const { socket } = React.useContext(SocketContext);

  const votar = () => socket.emit('votar-banda', id)

  const handleDeleteBand = () => socket.emit('delete-banda', id)

  
  return (
    <tr>
      <td>
        <button 
          className="btn btn-primary"
          onClick={ votar }
        >
          +1
        </button>
      </td>
      <td>
        <input
          className="form-control"
          name="name"
          value={ name }
          onChange={({ target }) => nameChange( id, target.value ) }
          onBlur={() => nameOnBlur( id, name ) }
        />
      </td>
      <td><h3>{ votes }</h3></td>
      <td>
        <button
          className="btn btn-danger"
          onClick={ handleDeleteBand }
        >
          Borrar
        </button>
      </td>
    </tr>
  )
}
