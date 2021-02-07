import * as React from 'react'

export const BandItem = ({band}) => {

  const { id, name, votes } = band

  return (
    <tr>
      <td>
        <button className="btn btn-primary"
        >
          +1
        </button>
      </td>
      <td>
        <input
          className="form-control"
          value={ name }
        />
      </td>
      <td><h3>{ votes }</h3></td>
      <td>
        <button
          className="btn btn-danger"
        >
          Borrar
        </button>
      </td>
    </tr>
  )
}
