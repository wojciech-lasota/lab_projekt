import './App.css';
import { useState } from 'react';
import Toolbar from './Toolbar';

import Drag from './Drag';
import Notepad from './Notepad';
import Minesweeper from './Minesweeper';

let currentId = 1;

const appMap = { notepad: Notepad, minesweeper: Minesweeper };

function App() {
    const [appRegistry, setAppRegistry] = useState({});

    const openApp = (appName) => {
        const newApp = { appName, id: currentId };
        setAppRegistry({ ...appRegistry, [currentId]: newApp });
        currentId++;
    };
    const onClose = (id) => {
        const newRegistry = Object.values(appRegistry)
            .filter(({ id: appId }) => appId !== id)
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
