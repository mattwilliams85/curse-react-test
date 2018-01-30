import * as React from 'react';
import { connect } from 'react-redux';

import { GameInfo, GameInfoProps, ConnectedProps } from './GameInfo';
import { GlobalState } from '../../state/GlobalState';

function mapStateToProps(state: GlobalState, props: GameInfoProps): ConnectedProps {
  return {
    selected: state.games.selected,
  };
};

// tslint:disable-next-line:variable-name
export const GameInfoContainer = connect(mapStateToProps)(GameInfo) as React.ComponentClass<GameInfoProps>;
