import * as React from 'react'
import { SocketProvider } from './context/SocketContext'
import HomePage from './HomePage'


export const BandNamesApp = () => {
  return (
    <SocketProvider>
      <HomePage />
    </SocketProvider>
  )
}
