import { GamesState } from "../state/GamesState";
import { 
    FetchGamesStarted, FetchGamesSucceeded, FetchGamesFailed, SelectGame,
    FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_FAILED,
    SELECT_GAME,
} from '../actions/games';

type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed | SelectGame;

const initialState: GamesState = {
    entities: [],
    isLoading: false,
    selected: {},
};

export function gamesReducer(state: GamesState = initialState, action: Actions) {
    switch (action.type) {
        case FETCH_GAMES_STARTED:
            return {...state, isLoading: true};
        case FETCH_GAMES_FAILED:
            return state;
        case SELECT_GAME:
            return {
                ...state,
                selected: action.payload,
            };
        case FETCH_GAMES_SUCCEEDED:
            return { 
                ...state, 
                isLoading: false,
                entities: action.payload, 
            };

        default:
            return state;
        }
}
