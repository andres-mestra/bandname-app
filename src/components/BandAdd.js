import * as React from 'react'
import { SocketContext } from '../context/SocketContext'

export const BandAdd = () => {

  const { socket } = React.useContext(SocketContext)
  const [value, setValue] = React.useState('')

  const handleSumit = (e) => {
    e.preventDefault()
    if( value.trim().length > 0 ){
      
      // createBand(value);
      socket.emit('new-banda', { name: value })
      setValue('')
    }
  }
  

  return (
    <>
      <h3>Agregar Banda</h3>

      <form 
        className="mb-3"
        onSubmit={ handleSumit }
      >
        <input 
          className="form-control"
          placeholder="Nuevo nombre de banda"
          name="name"
          value={ value }
          onChange={({ target }) => setValue(target.value)}
        />
      </form>
    </>
  )
}
