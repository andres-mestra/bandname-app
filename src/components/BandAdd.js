import * as React from 'react'

export const BandAdd = ({ createBand }) => {

  const [value, setValue] = React.useState('')

  const handleSumit = (e) => {
    e.preventDefault()
    if( value.trim().length > 0 ){
      
      createBand(value);
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
