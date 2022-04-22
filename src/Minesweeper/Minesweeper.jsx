import React from 'react';
import { minesweeper } from 'minesweeper-for-web';

function Minesweeper() {
    return (
        <>
            <p>
                Just play minesweeper . To place a flag press alt while clicking
                on a field.
            </p>

            <p>
                <span id="bomb-counter" /> Mines
            </p>
            <minesweeper-game
                id="minesweeper"
                restart-selector="#restart-game-button"
                bomb-counter-selector="#bomb-counter"
            />
            <p>
                <button type="button" id="restart-game-button">
                    Restart!
                </button>
            </p>
        </>
    );
}

export default Minesweeper;
