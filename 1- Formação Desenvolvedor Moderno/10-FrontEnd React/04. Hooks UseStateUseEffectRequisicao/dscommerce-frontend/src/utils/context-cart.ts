

//Passos para usar um estado global 
//• Criar o contexto

import { createContext } from "react";

//• Definir o tipo do contexto (dado + função set)
export type ContectCartCountType = {
    contextCartCount: number;  ////• Criar o contexto
    setContextCartCount: (contextCartCount: number ) => void; //• Definir o tipo do contexto (dado + função set)
 }

 export   const  ContextCartCount = createContext<ContectCartCountType>({
    contextCartCount :0,
    setContextCartCount: () => {}
})


