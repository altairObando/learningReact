import { createContext, useState} from 'react';

const template = () => {}
const ObjectContext = {
    value: '', // Valor disponible para los contextos
    message: '',// Utilizada para mostrar mensajes en pantalla
    hasMessage: false, // Indica si hay mensajes pendientes para mostrar
    success: true, // Operacion exitosa.
    updateValues: template, // Plantilla de funcion.
}
/**
 * Contexto a utilizar en clases hijos para acceder a la información.
 */
export const Context = createContext(ObjectContext)
export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;

export default function FunctionalContext ({children}){
    const [context, setContext] = useState(ObjectContext)

return <ContextProvider value={{ context, setContext }}>
            {children}
       </ContextProvider>
}
