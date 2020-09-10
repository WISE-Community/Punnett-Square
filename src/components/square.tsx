import React from 'react';
import './square.scss';
import Parent from './parent';

class Square extends React.Component {
  render() {
    return (
      <div>
        <div className="square-wrap">
          <div className="spacer"></div>
          <div className="father">
            <Parent title={'Father'} />
          </div>
        </div>
        <div className="square-wrap">
          <div className="mother">
            <Parent title={'Mother'} vertical={true} />
          </div>
          <div className="result"></div>
        </div>
      </div>
    )
  }
}

export default Square;
