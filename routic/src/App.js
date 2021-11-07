import {useState} from 'react';
import './App.css';
import './index.css';
import Layout from  './components/Layout';

import background_ice from './images/background.png';
import background_selected from './images/background_route.png';
import background_risk from './images/background_risk.png';

require('dotenv').config();


function App() {
    const [background, setBackground] = useState(background_ice);
    
    const selectBackground = (selection) => {
        if(selection == "selected") {
            setBackground(background_selected);
        }

        if(selection == "calculate") {
            setBackground(background_risk);
        }
    };
    
  return (
      <div className="overflow-hidden">
        <Layout
          selectCallback={selectBackground}
        >
      </Layout>
        <Background
          backgroundImage={background}
        />
    </div>
  );
}

function Background({backgroundImage}) {
    return(<div className="z-0 w-screen h-screen absolute">
             <img
               className="w-screen h-screen"
               src={backgroundImage}
             />
           </div>);
}







export default App;
