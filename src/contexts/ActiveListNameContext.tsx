import React from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'



const defaultActiveListName = 'list2'
export type ActiveListNameType = [
  string | null,
  (value: string) => void
] |[]

export const ActiveListNameContext = React.createContext<
  ActiveListNameType
  >([])

const ActiveListNameProvider: React.FC<{}> = ({children}) => {

  const [activeListName, setActiveListName] = useLocalStorage(
    'activeListName',
    defaultActiveListName,
  )
  return (
    <ActiveListNameContext.Provider value={[activeListName, setActiveListName]}>
      {children}
    </ActiveListNameContext.Provider>
  )
}
export default ActiveListNameProvider
//factory
export const withActiveListNameContextF = () => {
    return <T extends object, C extends React.ComponentType<T> | {(props: T): JSX.Element}>(Component: C): C => {
        const Comp = Component as any;
        return (((props: T) =>(<ActiveListNameContext.Consumer>
            {context => <Comp context={context} />}
          </ActiveListNameContext.Consumer>
          )) as any) as C;


    };
};
export const withActiveListNameContext =
     <T extends object, C extends React.ComponentType<T> | {(props: T): JSX.Element}>(Component: C): C => {
        const Comp = Component as any;
        return (((props: T) =>(
       <ActiveListNameContext.Consumer>
            {context => <Comp context={context} />}
         </ActiveListNameContext.Consumer>
          )) as any) as C;


    };

export type ListName = {
  name: string
}

export function withActiveName<P>(WrappedComponent: React.ComponentType <P & ListName>): React.ComponentType<P> {
           const ComponentWithActiveListName = (props: P) =>(
                <ActiveListNameContext.Consumer>
                    {context => <WrappedComponent {...props}
                  name={context[0]} />}
                </ActiveListNameContext.Consumer>)
          return ComponentWithActiveListName;
 }


export const withActiveNameF = () => {
    return <T extends object, C extends React.ComponentType<T>>(Component: C): C => {
        const Comp = Component as any;
        return (((props: T) =>(<ActiveListNameContext.Consumer>
            {context => <Comp {...props} name={context[0]} />}
          </ActiveListNameContext.Consumer>
          )) as any) as C;


    };
};
