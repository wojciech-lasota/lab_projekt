import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar';
import { useState } from 'react';

import Drag from './Drag';
import Notepad from './Notepad';

let currentId = 1;
const appMap = { notepad: Notepad };

function App() {
    const [appRegistry, setAppRegistry] = useState({});

    const openApp = (appName) => {
        const newApp = { appName, id: currentId };
        setAppRegistry({ ...appRegistry, [currentId]: newApp });
        currentId++;
    };
    return (
        <>
            {}
            {
                /* <Drag>
                <Notepad />
            </Drag> */
                Object.values(appRegistry).map(({ appName, id }) => (
                    <div key={id}>
                        <Drag>{appMap[appName]()}</Drag>
                    </div>
                ))
            }
            <Toolbar openApp={openApp} />
        </>
    );
}

export default App;
