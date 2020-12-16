import React from 'react'
import {ActiveListNameType, withActiveListNameContext, withActiveName, withActiveNameF,  ListName} from "../contexts/ActiveListNameContext";


export const Title = withActiveListNameContext(({context}: {context?: ActiveListNameType}) => {
  const [activeListName] = context;
  return (
    <h1>{activeListName}</h1>
  )
})
export const Title1 = withActiveName(({name}: {name?: string}) => {
  return (
    <h1>{name}</h1>
  )
})

@withActiveNameF()
export class ClassTitle extends React.Component<{name?: string},{}> {
  render(){
    return (
    <h1>class {this.props.name} </h1>
    )
  }
}
