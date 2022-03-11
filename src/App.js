
import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from './footer/footer'
import Header from './header/Header'
import routing from './helpers/routing'


export default function App() {
  return (
  <>
       <header>
         <Header/>
       </header>
       <main>
         <Switch>
           {routing.map(item => {return(
             <Route 
              path={item.path}
              key={item.id}
              component={item.component}
              exact
             />
           )})}
         </Switch>
       </main>
       <footer>
         <Footer/>
       </footer>
  </>
    
  )
}


