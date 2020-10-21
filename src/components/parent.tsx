import React from 'react';
import { Allele } from '../domain/allele';
import './parent.scss';

export default class Parent extends React.Component<{ title: String, vertical?: Boolean }> {
  render() {
    return (
      <div className={`parent ${this.props.vertical ? "vertical" : ""}`}>
        <h5>{this.props.title}</h5>
        <div className="targets">
          <div className="target"></div>
          <div className="target"></div>
        </div>
      </div>
    );
  }
}
