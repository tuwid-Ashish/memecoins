import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {Footer, Header} from './components/'
import { Outlet } from "react-router-dom";
function App() {
  const [inApp, setInapp] = useState(false);

  return !inApp ? (
    <div className="w-full min-h-screen flex  justify-center items-center">
          <button
            onClick={() => setInapp(true)}
            className='bg-blue-500 ease-in-out delay-150 duration-300 hover:scale-150   hover:-translate-y-1 text-white px-4 py-2 rounded-lg'
            >
            Open App
          </button>
            </div>
      ) : (
        
           <div>
              <Header/>
              <Outlet/>
              <Footer/>
           </div>
    
      )
  
}

export default App;