import * as React from 'react'
import { BandItem } from './BandItem'

export const BandList = ({ data, votar }) => {

  const [bands, setBands] = React.useState(data)

  React.useEffect(() => {
    setBands(data);
  }, [data])

  const handleNameChange = ({ target }, id) => {
    const newName = target.value;
    setBands(bands => bands.map(band => {
      if (band.id === id) {
        band.name = newName;
      }

      return band
    }))
  }
 
  //Se dispara cuando se pierde el foco
  const handleOnBlur = (id, name) => {
    console.log(id, name)
    //TODO:disparar el evento de socket
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
                  band={band}
                  handleNameChange={handleNameChange}
                  handleOnBlur={handleOnBlur}
                  votar={ votar }
                />
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}
