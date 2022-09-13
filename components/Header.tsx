import { FC, PropsWithChildren } from 'react'

export const Header: FC<PropsWithChildren<{}>>  = ({children}) => {
  return (
    <div>{ children} </div>
  )
}
