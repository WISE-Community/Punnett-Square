import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import './parent.scss';

export default class Parent extends React.Component<{ title: String, vertical?: Boolean }> {
  state = {
    allele1: null,
    allele2: null
  }

  render() {
    return (
      <div className={`parent ${this.props.vertical ? "vertical" : ""}`}>
        <h5>{this.props.title}</h5>
        <div className="targets">
          <Droppable droppableId={`${this.props.title}1`}>
            {(provided, snapshot) => (
              <div className="target" ref={provided.innerRef}></div>
            )}
          </Droppable>
          <Droppable droppableId={`${this.props.title}2`}>
            {(provided, snapshot) => (
              <div className="target" ref={provided.innerRef}></div>
            )}
          </Droppable>
        </div>
      </div>
    );
  }
}
