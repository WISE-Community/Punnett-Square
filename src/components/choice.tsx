import React from 'react';
import { Allele } from '../domain/allele';
import './choice.scss';

export default class Choice extends React.Component<{ allele: Allele }> {
  render() {
    return (
      <div className="choice">
        <span>{this.props.allele.name}</span>
      </div>
    );
  }
}
