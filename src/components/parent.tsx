import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Target } from '../domain/target';
import './parent.scss';

export default class Parent extends React.Component<{ title: String, targets: Target[], vertical?: Boolean }> {
  state = {
    allele1: null,
    allele2: null
  }

  render() {
    return (
      <div className={`parent ${this.props.vertical ? "vertical" : ""}`}>
        <h5>{this.props.title}</h5>
        <div className="targets">
          <Droppable droppableId={`${this.props.title}-0`}>
            {(provided, snapshot) => (
              <div className="target" ref={provided.innerRef}>
                {this.props.targets[0].allele?.name}
              </div>
            )}
          </Droppable>
          <Droppable droppableId={`${this.props.title}-1`}>
            {(provided, snapshot) => (
              <div className="target" ref={provided.innerRef}>
                {this.props.targets[1].allele?.name}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    );
  }
}
