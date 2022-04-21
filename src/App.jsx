import './App.css';
import { useState } from 'react';
import Toolbar from './Toolbar/Toolbar';

import Drag from './Drag/Drag';
import Notepad from './Notepad';
import Minesweeper from './Minesweeper';
import CurrentWeater from './Weather/Weather';

let currentId = 1;
let currentIndex = 0;
const appMap = { notepad: Notepad, minesweeper: Minesweeper };

function App() {
    const [appRegistry, setAppRegistry] = useState({});
    const pushToTop = (id) => {
        if (appRegistry[id].index === currentIndex - 1) {
            return;
        }
        const newRegistry = {
            ...appRegistry,
            [id]: { ...appRegistry[id], index: currentIndex },
        };
        setAppRegistry(newRegistry);
        currentIndex++;
    };
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
            <CurrentWeater />
            {
                /* <Drag>
                <Notepad />
            </Drag> */

                Object.values(appRegistry).map(({ appName, id }) => (
                    <div key={id}>
                        <Drag
                            id={id}
                            onClose={onClose}
                            onClick={pushToTop}
                            index={appRegistry[id].index}
                        >
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
