import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Target } from '../domain/target';
import './parent.scss';

export default class Parent extends React.Component<{ title: String, targets: Target[], vertical?: Boolean }> {
  render() {
    const alleles = [
      this.props.targets[0].allele,
      this.props.targets[1].allele
    ];

    return (
      <div className={`parent ${this.props.vertical ? 'vertical' : ''}`}>
        <h5>{this.props.title}</h5>
        <div className="targets">
          {alleles.map((allele, index) => {
            return (
              <Droppable key={index} droppableId={`${this.props.title}-${index}`}>
                {(provided, snapshot) => (
                  <div className={`target ${snapshot.isDraggingOver ? 'hover' : ''}`} 
                      ref={provided.innerRef}
                      {...provided.droppableProps}>
                    <span className={allele ? 'choice' : ''}>
                      {allele?.name}
                    </span>
                  </div>
                )}
              </Droppable>
            )
          })}
        </div>
      </div>
    );
  }
}
