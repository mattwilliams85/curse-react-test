import * as React from 'react';
import { Game } from "../../models/Game";

export interface GameInfoProps extends React.Props<GameInfo> {}

export interface ConnectedProps {
  selected: Game;
}

type CombinedTypes = GameInfo & ConnectedProps;

export class GameInfo extends React.Component<CombinedTypes, void> {
  render() {
    const { selected } = this.props;

    return (
      <div className={`GameInfo ${selected.Name ? '' : 'hide' }`}>
        <h1 className="title">{selected.Name}</h1>
 
      <div className="modal">
        { selected.Name ? 
          <div>
            <div className="list">
              <h3>Voice Support</h3>
              <div className="selectable capitalize">{selected.SupportsVoice.toString()}</div>
            </div>

            <div className="list">
              <h3>Addon Support</h3>
              <div className="selectable capitalize">{selected.SupportsAddons.toString()}</div>
            </div>

            <div className="list">
              <h3>Slug</h3>
              <div className="selectable">{selected.Slug}</div>
            </div>

            <div className="list">
              {selected.GameFiles.length ?
                <div>
                  <h3>Game Files</h3>
                  <div>{selected.GameFiles.map((file, i) => {
                    return <div className="selectable" key={i}>{file.FileName}</div>;
                  })}</div>
                </div>
                : null}
            </div>

            <div className="list">
              { selected.CategorySections.length ? 
                <div>
                  <h3>Category Sections</h3>
                  <div>{selected.CategorySections.map((section, i) => {
                    return <div className="selectable" key={i}>{section.Name}</div>;
                  })}</div>
                </div>
                : null }
            </div>
          </div>
        : null}
      </div>
      </div>
    );
  }
} 