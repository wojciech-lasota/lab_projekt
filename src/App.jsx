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
    const onClose = (id) => {
        const newRegistry = Object.values(appRegistry)
            .filter(({ appId }) => appId !== id)
            .reduce((registry, app) => ({ ...registry, [app.id]: app }), {});
        setAppRegistry(newRegistry);
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
                        <Drag id={id} onClose={onClose}>
                            {appMap[appName]()}
                        </Drag>
                    </div>
                ))
            }
            <Toolbar openApp={openApp} />
        </>
    );
}

export default App;
