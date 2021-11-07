import {useState, useEffect} from 'react';
import arrow from '../images/arrow.png';

export default function Layout({children, selectCallback}) {
    return(
        <div className="z-10 relative">
          <ColPannel
            selectCallback={selectCallback}
          />
          {children}
        </div>
    );
}



function ColPannel({selectCallback}) {
    const [show, setShow] = useState(true);

    
    return(
        <div
          className="block"
        >

            {
                show === true &&
                <div className="bg-gray-600 w-80 h-screen float-left relative oveflow-hidden">
                  <Controlls
                    selectCallback={selectCallback}
                    routes={[{"id": "001", "name": "route 1"}, {"id": "002", "name": "route 2"}]}
                    time={[{"id": "001", "name": "time 1"}, {"id": "002", "name": "time 2"}]}
                    ships={[{"id": "001", "name": "ship 1"}, {"id": "002", "name": "ship 2"}]}
                    />
                </div>
            }
          <div>
            <img
            className="w-16 h-16 absolute bg-white rounded-md p-3 mt-6 ml-80"
            src={arrow}
            onClick={() => setShow(!show)}
          />
          </div>
        </div>
    );
}

function Controlls({routes, ships, time, selectCallback}) {
    return(
        <div className="w-full">
          <select className="w-full mt-4"
                  onChange={(e) => (e.target.value === "001")? selectCallback("selected") : null }
          >
            <option></option>
            {generateOptions(routes)}
          </select>
          <select  className="w-full mt-4">
            <option></option>
            {generateOptions(time)}
          </select>
          <select  className="w-full mt-4">
            <option></option>
            {generateOptions(ships)}
          </select>
          <button
            className="bg-white w-full mt-4"
            onClick={() => selectCallback("calculate")}
          >
            select
          </button>
        </div>
    );
}

function generateOptions(elements) {
    return elements.map((el,i) => (<option value={el.id} key={i}>{el.name}</option>));
}
