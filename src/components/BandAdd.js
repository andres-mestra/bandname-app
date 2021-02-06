import * as React from 'react'

export const BandAdd = () => {
  return (
    <>
      <h3>Agregar Banda</h3>

      <form 
        className="mb-3"
      >
        <input 
          className="form-control"
          placeholder="Nuevo nombre de banda"
        />
      </form>
    </>
  )
}
