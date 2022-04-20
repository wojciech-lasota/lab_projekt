/* eslint-disable import/no-unresolved */
import 'https://cdn.skypack.dev/minesweeper-for-web';

window.addEventListener('DOMContentLoaded', () => {
    function getGameModeConfiguration(currentGameMode) {
        switch (currentGameMode) {
            case 'hard':
                return {
                    columns: 30,
                    rows: 16,
                    bombs: 99,
                };
            case 'normal':
                return {
                    columns: 16,
                    rows: 16,
                    bombs: 40,
                };
            case 'easy':
            default:
                return {
                    columns: 9,
                    rows: 9,
                    bombs: 10,
                };
        }
    }

    const minesweeper = document.getElementById('minesweeper');

    minesweeper.addEventListener('game-won', () => {
        window.alert('win');
    });

    minesweeper.addEventListener('game-lost', () => {
        window.alert('lose');
    });

    document
        .getElementById('restart-game-button-confirm')
        .addEventListener('click', (e) => {
            e.preventDefault();
            if (
                window.confirm(
                    'Are you sure, that you want to restart the game?',
                )
            ) {
                minesweeper.restartGame();
            }
        });

    document
        .getElementById('select-game-mode')
        .addEventListener('change', (e) => {
            e.preventDefault();

            const gameModeConfiguration = getGameModeConfiguration(
                e.target.value,
            );
            minesweeper.setGameModeConfiguration(gameModeConfiguration);
        });
});
