import * as React from 'react';
import { config } from "./../../globals";
import { Game } from "../../models/Game";

export interface SidebarProps extends React.Props<Sidebar> {}

export interface ConnectedProps {
  games: Game[];
  isLoading: boolean;
  selected: Game;
}

export interface ConnectedDispatch {
  fetchGames: Function;
  selectGame: Function;
}

type CombinedTypes = SidebarProps & ConnectedProps & ConnectedDispatch;

export class Sidebar extends React.Component<CombinedTypes, any> {
  constructor(props: any) {
    super(props); 

    this.state = {
      gameQuery: undefined,
    };
  }
  componentDidMount() {
    this.props.fetchGames();
  }

  fetchIcon = (gameID: number) => {
    return config.gameIconURLTemplate(gameID);
  }

  handleClick(game: Game) {
    this.props.selectGame(game);
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const string = e.currentTarget.value.toLowerCase()
    const { games } = this.props;
    let query = games.filter((item) => item.Name.toLowerCase().indexOf(string) === 0);

    if (!string) { query = games; };
    if (!e.currentTarget.value) { query = undefined; }

    this.setState({
      gameQuery: query,
    });
  }

  render() {
    const { games, isLoading, selected } = this.props;
    const { gameQuery } = this.state;
    const gamesArray = gameQuery || games;
    const { handleClick, handleChange } = this;

    return (
        <div className="Sidebar">
          <div className="logo-wrap">
            <img src="../../../assets/images/flame.png" />
            <h3>Curse React Test</h3>
          </div>

        <div className={`search-wrap ${this.state.gameQuery ? 'active' : ''}`}>
            <input
              type="search"
              onChange={handleChange}
              placeholder="Search"
              className="search"  />
          </div>

            
          <div className="hr"></div>
      
          <div className="scrollable">
            {isLoading ?
              <div className="loader-wrap">
                <div className="loader"></div>
              </div>
              :
              gamesArray
                .map((game: Game, index: number) => {
                    return (
                      <div 
                        key={index} 
                        className={ `game-wrap ${selected.Name === game.Name ? 'active' : ''}` }
                        onClick={handleClick.bind(this, game)}>
                        <img className="icon" src={this.fetchIcon(game.ID)} />

                        <div>
                          <div>{game.Name}</div>
                          <div className="sub-text">
                            { game.SupportsAddons ?
                              <span className="support">Addons</span>
                              : 'No Addons'
                            } |
                            { game.SupportsVoice ?
                              <span className="support"> Voice-chat</span>
                              : 'No Voice-chat'
                            }
                          </div>
                        </div>
                    </div>
                  )
                })
              }
            </div>
        </div>
    );
  }
} 