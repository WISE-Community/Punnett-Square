import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.scss';
import Choice from './components/choice';
import Square from './components/square';
import { Allele } from './domain/allele';

class App extends React.Component {
  state = {
    choices: [
      new Allele('allele1', true, 'A'),
      new Allele('allele2', false, 'a')
    ],
    parentTitles: [
      'Father',
      'Mother'
    ]
  };

  onDragEnd = (result: any) => {
    const { source, destination, draggableId } = result;

    // dropped outside the list
    if (!destination) {
        return;
    }

    console.log(`target: ${destination.droppableId}, allele: ${draggableId}`)
  }

  render() {
    return (
      <div>
        <h2>Interactive Punnet Square</h2>
        <p>Drag an allele to each of the four drop spots. Each parent gets two alleles.</p>
        <div className="wrap">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="choices">
              {(provided, snapshot) => (
                  <div className="choices" ref={provided.innerRef} {...provided.droppableProps}>
                    {this.state.choices.map((choice, index) => 
                      <Draggable draggableId={`allele${index}`} index={index}>
                        {(provided, snapshot) => (
                          <div ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                            <Choice allele={choice}/>
                          </div>
                        )}
                      </Draggable>
                    )}
                  </div>
              )}
            </Droppable>
            <Square parentTitles={this.state.parentTitles}/>
          </DragDropContext>
        </div>
      </div>
    )
  }
}

export default App;
