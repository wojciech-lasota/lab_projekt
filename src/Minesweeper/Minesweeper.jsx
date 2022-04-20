import React from 'react';
import { minesweeper } from 'minesweeper-for-web';

function Minesweeper() {
    return (
        <>
            <p>
                Just play minesweeper . To place a flag press alt while clicking
                on a field.
            </p>
            <select
                name="select-game-mode"
                id="select-game-mode"
                defaultValue="DEFAULT"
            >
                <option value="DEFAULT" disabled>
                    Choose a salutation ...
                </option>
                <option value="easy">Easy - 9x9 / 10 Mines</option>
                <option value="normal">Normal - 16x16 / 40 Mines</option>
                <option value="hard">Hard - 16x30 / 99 Mines</option>
            </select>
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
                <button type="button" id="restart-game-button-confirm">
                    Restart with Confirm!
                </button>
            </p>
        </>
    );
}

export default Minesweeper;
