import React from 'react';
import './square.scss';

export default class Square extends React.Component<{ result: String[] }> {
  values = new Array<String>();

  render() {
    let values = this.props.result;
    values = this.props.result.filter((val: any) => {
      return val !== '';
    });
    if (values.length < 4) {
      this.values = ['','','',''];
    } else {
      this.values = values;
    }

    return (
      <div className="square">
        <table>
          <tbody>
          <tr>
            <td>
              {this.values[0]}
            </td>
            <td>
              {this.values[1]}
            </td>
          </tr>
          <tr>
            <td>
              {this.values[2]}
            </td>
            <td>
              {this.values[3]}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
