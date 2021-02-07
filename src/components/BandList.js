import * as React from 'react'
import { BandItem } from './BandItem'

export const BandList = ({ data }) => {

  const [bands, setBands] = React.useState(data)

  React.useEffect(() => {
    setBands(data);
  },[data])

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
            bands.map( band => {
              return <BandItem band={band} key={band.id} />
            })
          }
        </tbody>
      </table>
    </>
  )
}
