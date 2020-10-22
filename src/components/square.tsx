import React from 'react';
import './square.scss';
import Parent from './parent';

class Square extends React.Component<{ parentTitles: String[] }> {
  render() {
    return (
      <div>
        <div className="square-wrap">
          <div className="spacer"></div>
          <div className="parent1">
            <Parent title={this.props.parentTitles[0]} />
          </div>
        </div>
        <div className="square-wrap">
          <div className="parent2">
            <Parent title={this.props.parentTitles[1]} vertical={true} />
          </div>
          <div className="result">
            <table>
              <tr>
                <td>
                  {/* <Result /> */}
                </td>
                <td>
                  {/* <Result /> */}
                </td>
              </tr>
              <tr>
                <td>
                  {/* <Result /> */}
                </td>
                <td>
                  {/* <Result /> */}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Square;
