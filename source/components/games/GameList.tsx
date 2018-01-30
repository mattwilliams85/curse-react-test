import * as React from 'react';
import { SidebarContainer } from "../sidebar/SidebarContainer";
import { GameInfoContainer } from '../modals/GameInfoContainer';

export class GameList extends React.Component<void, void> {
    render() {
        return (
            <div className='GameList--root'>
                <SidebarContainer />
                <GameInfoContainer />
            </div>
        );
    }
}
