import { Game } from "../models/Game";

export interface GamesState {
    entities: Game[];
    isLoading: boolean;
    selected: any;
}
