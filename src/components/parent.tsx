import React from 'react';
import { Allele } from '../domain/allele';

export default class Parent extends React.Component<{ title: String, vertical?: Boolean }> {
  render() {
    return (
      <div className={`${this.props.vertical ? "vertical" : ""}`}>
        <h5>{this.props.title}</h5>
        <div>
          <div className="allele"></div>
          <div className="allele"></div>
        </div>
      </div>
    );
  }
}
