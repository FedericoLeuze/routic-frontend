import {useState, useEffect} from 'react';
import arrow from '../images/arrow.png';

export default function Layout({selectCallback, setAllert}) {

    
    return(
        <div className="z-10 relative">
          <ColPannel
            selectCallback={selectCallback}
            setAllert={setAllert}
          />
        </div>
    );
}



function ColPannel({selectCallback}) {
    const [show, setShow] = useState(true);
    const [allert, setAllert] = useState(false);
    const [ship, setShip] = useState(null);
    
    return(
        <div
          className="block"
        >

            {
                show === true &&
                <div className="bg-blue-300 w-80 h-screen float-left relative oveflow-hidden">
                  <Controlls
                    selectCallback={selectCallback}
                    routes={[{"id": "001", "name": "artic bridge"}]}
                    time={[{"id": "001", "name": "april"}]}
                    ships={[{"id": "001", "name": "small Ship"}, {"id": "002", "name": "ice braker"}]}
                    setAllert={setAllert}
                    setShip={setShip}
                  />
                  {
                      (allert === true && ship === '001') &&
                      
                      <div className="w-full mt-6 bg-red-500 text-white text-center">
                        High risk, use ice braker
                      </div>
                  
                  }
                </div>
            }
          <div>
          </div>
        </div>
    );
}

function Controlls({routes, ships, time, selectCallback, setAllert, setShip}) {
    const  [selected, setSelected] = useState(false);
    
    return(
        <div className="w-full">
          <select className="w-full mt-4"
                  onChange={(e) => (e.target.value === "001")? selectCallback("selected") : selectCallback("nonSelected") }
          >
            <option>---choose route---</option>
            {generateOptions(routes)}
          </select>
          <select  className="w-full mt-4">
            <option>---choose time---</option>
            {generateOptions(time)}
          </select>
          <select  className="w-full mt-4"
                   onChange={(e) => (e.target.value === '001' )? setShip('001') : setShip(null)}
          >
            <option>---choose ship---</option>
            {generateOptions(ships)}
          </select>
          <button
            className="bg-white w-full mt-4"
            onClick={() => {
                selectCallback("calculate");
                setAllert(true);
            }}
          >
        {(selected)? 'select' : 'selected'}
          </button>
        </div>
    );
}

function generateOptions(elements) {
    return elements.map((el,i) => (<option value={el.id} key={i}>{el.name}</option>));
}
