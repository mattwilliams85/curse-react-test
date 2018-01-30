import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Sidebar, SidebarProps, ConnectedProps, ConnectedDispatch } from './Sidebar';
import { GlobalState } from '../../state/GlobalState';
import { fetchGames, selectGame } from '../../actions/games';

function mapStateToProps(state: GlobalState, props: SidebarProps): ConnectedProps {
  return {
    games: state.games.entities,
    isLoading: state.games.isLoading,
    selected: state.games.selected,
  };
};

function mapDispatchToProps(dispatch: Dispatch<any>): ConnectedDispatch {
  return bindActionCreators({
    fetchGames, 
    selectGame,
  }, dispatch);
};

// tslint:disable-next-line:variable-name
export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar) as React.ComponentClass<SidebarProps>;
