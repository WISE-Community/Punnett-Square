import React from 'react';
import './square.scss';
import Parent from './parent';
import { Target } from '../domain/target';

class Square extends React.Component<{ parents: any[] }> {
  render() {
    return (
      <div>
        <div className="square-wrap">
          <div className="spacer"></div>
          <div className="parent1">
            <Parent title={this.props.parents[0].title} targets={this.props.parents[0].targets} />
          </div>
        </div>
        <div className="square-wrap">
          <div className="parent2">
            <Parent title={this.props.parents[1].title} targets={this.props.parents[1].targets} vertical={true} />
          </div>
          <div className="result">
            <table>
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Square;
