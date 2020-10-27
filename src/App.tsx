import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.scss';
import Choice from './components/choice';
import Square from './components/square';
import { Allele } from './domain/allele';
import { Target } from './domain/target';

class App extends React.Component {
  state = {
    choices: [
      new Allele('allele0', true, 'A'),
      new Allele('allele1', false, 'a')
    ],
    parents: [
      {
        title: 'Mother',
        targets: [
          new Target('Mother-0'),
          new Target('Mother-1')
        ]
      },
      {
        title: 'Father',
        targets: [
          new Target('Father-0'),
          new Target('Father-1')
        ]
      }
    ]
  };

  onDragEnd = (result: any) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
        return;
    }
    this.setTarget(destination.droppableId, draggableId);
    console.log(`target: ${destination.droppableId}, allele: ${draggableId}`)
  }

  setTarget(droppableId: string, draggableId: string) {
    const parentDroppable = droppableId.split('-');
    const title = parentDroppable[0];
    const index = parseInt(parentDroppable[1]);
    for (const parent of this.state.parents) {
      if (title === parent.title) {
        parent.targets[index].allele = this.getChoice(draggableId);
        break;
      }
    }
  }

  getChoice(draggableId: string) {
    for (const choice of this.state.choices) {
      if (draggableId === choice.id) {
        return choice;
      }
    }
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
                      <Draggable key={index} draggableId={`allele${index}`} index={index}>
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
            <Square parents={this.state.parents}/>
          </DragDropContext>
        </div>
      </div>
    )
  }
}

export default App;
