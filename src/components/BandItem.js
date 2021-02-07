import * as React from 'react'
import { SocketContext } from '../context/SocketContext';

export const BandItem = ({ id, name, votes }) => {

  const { socket } = React.useContext(SocketContext);
  const [value, setValue] = React.useState(name)

  const votar = () => socket.emit('votar-banda', id)

  const handleDeleteBand = () => socket.emit('delete-banda', id)

  
  const handleNameChange = ({ target }) => {
    const newName = target.value;
    setValue(newName);
  }
 
  //Se dispara cuando se pierde el foco
  const handleOnBlur = () => {
    
    if( value.trim().length > 0 ){
      socket.emit('change-name-banda', {id, name: value })
    }
  }

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
          value={ value }
          onChange={ handleNameChange }
          onBlur={ handleOnBlur }
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
