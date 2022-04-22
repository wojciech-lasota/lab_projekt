import './App.css';
import { useState } from 'react';
import Toolbar from './Toolbar/Toolbar';

import Drag from './Drag/Drag';
import Notepad from './Notepad';
import Minesweeper from './Minesweeper';
import CurrentWeater from './Weather/Weather';
import Background from './Background/Background';
import DesktopIcon from './DesktopIcon/DesktopIcon';

let currentId = 1;
let currentIndex = 1;
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
        const newApp = { appName, id: currentId, index: currentIndex };
        setAppRegistry({ ...appRegistry, [currentId]: newApp });
        currentId++;
        currentIndex++;
    };
    const onClose = (id) => {
        const newRegistry = Object.values(appRegistry)
            .filter(({ id: appId }) => appId !== id)
            .reduce((registry, app) => ({ ...registry, [app.id]: app }), {});
        setAppRegistry(newRegistry);
    };
    const onDesktopIconClick = (fileName) => {
        const newApp = {
            appName: 'notepad',
            id: currentId,
            index: currentIndex,
            fileName,
        };
        setAppRegistry({ ...appRegistry, [currentId]: newApp });
        currentId++;
        currentIndex++;
    };
    return (
        <main>
            <Background onDesktopIconClick={onDesktopIconClick} />
            <CurrentWeater />
            {
                /* <Drag>
                <Notepad />
            </Drag> */

                Object.values(appRegistry).map(({ appName, id, fileName }) => (
                    <div key={id}>
                        <Drag
                            id={id}
                            onClose={onClose}
                            onClick={pushToTop}
                            index={appRegistry[id].index}
                        >
                            {appName === 'notepad' ? (
                                <Notepad openFileName={fileName} />
                            ) : (
                                <Minesweeper />
                            )}
                            {/* {appMap[appName]()} */}
                        </Drag>
                    </div>
                ))
            }
            <Toolbar openApp={openApp} />
        </main>
    );
}

export default App;
