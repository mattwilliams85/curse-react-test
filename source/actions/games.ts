import { Dispatch } from 'redux';
import { GlobalStateGetter } from "../state/GlobalState";
import { config } from "../globals";
import { Game } from "../models/Game";
import "whatwg-fetch";

// Select Game
export const SELECT_GAME = 'SELECT_GAME';
export type SelectGame = {
    type: typeof SELECT_GAME;
    payload: Game;
};

export function selectGame(game: Game): SelectGame {
    return {
        type: SELECT_GAME,
        payload: game,
    };
}

// Fetch Games Started
export const FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export type FetchGamesStarted = {
    type: typeof FETCH_GAMES_STARTED;
};

function fetchGamesStarted(): FetchGamesStarted {
    return { type: FETCH_GAMES_STARTED };
}

// Fetch Games Succeeded
export const FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
export type FetchGamesSucceeded = {
    type: typeof FETCH_GAMES_SUCCEEDED;
    payload: Game[];
};

function fetchGamesSucceeded(entities: Game[]): FetchGamesSucceeded {
    return { 
        type: FETCH_GAMES_SUCCEEDED,
        payload: entities,
    };
}

// Fetch Games Failed
export const FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export type FetchGamesFailed = {
    type: typeof FETCH_GAMES_FAILED;
};

function fetchGamesFailed(): FetchGamesFailed {
    Error('Fetch Games Failed!')
    return { type: FETCH_GAMES_FAILED };
}

// Fetch Games Thunk
export function fetchGames() {
    return (dispatch: Dispatch<any>, getState: GlobalStateGetter) => {
        dispatch(fetchGamesStarted());

        fetch(config.gamesDataURL)
            .then(function (response: any) {
                return response.json();
            }).then(function (json) {
                const entities = json.data.sort((a: Game, b: Game) => {
                    return a.Order - b.Order;
                }); 
                dispatch(fetchGamesSucceeded(entities));
            }).catch(function (ex) {
                dispatch(fetchGamesFailed);
            });
    };
}
