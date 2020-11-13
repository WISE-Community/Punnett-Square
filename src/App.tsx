import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.scss';
import Choice from './components/choice';
import Parent from './components/parent';
import Square from './components/square';
import { Allele } from './domain/allele';
import { Target } from './domain/target';

class App extends React.Component {
  settings = require(`./punnett-settings.json`);
  state = {
    choices: new Array<Allele>(),
    parents: new Array<any>(),
    result: ['','','','']
  };
  isClean: boolean = true;

  constructor(props: any) {
    super(props);
    this.reset = this.reset.bind(this);
    this.init = this.init.bind(this);
    this.initParents = this.initParents.bind(this);
    this.init();
  }

  init() {
    this.state.choices = new Array<Allele>();
    this.settings.alleles.map((allele: string, index: number) => {
      this.state.choices.push(new Allele(`allele${index}`, allele));
    });
    this.state.parents = this.initParents();
  }

  initParents() {
    const parents = new Array<any>();
    this.settings.parents.map((parent: string, index: number) => {
      parents.push({
        title: parent,
        targets: [
          new Target(`${parent}-0`),
          new Target(`${parent}-1`)
        ]
      });
    });
    return parents;
  }

  reset() {
    this.setState({parents: this.initParents()});
    this.setState({result: ['','','','']});
    this.isClean = true;
  }

  onDragEnd = (result: any) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
        return;
    }
    this.setTarget(destination.droppableId, draggableId);
  }

  setTarget(droppableId: string, draggableId: string) {
    const parentDroppable = droppableId.split('-');
    const title = parentDroppable[0];
    const targetIndex = parseInt(parentDroppable[1]);
    for (const [parentIndex, parent] of this.state.parents.entries()) {
      if (title === parent.title) {
        const allele = this.getChoice(draggableId);
        parent.targets[targetIndex].allele = allele;
        if (allele) {
          this.isClean = false;
          this.setResult(parentIndex, targetIndex, allele.name);
        }
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

  setResult(parentIndex: number, targetIndex: number, alleleName: string) {
    // console.log(this.state);
    const partner = this.state.parents[1-parentIndex];
    const newResult = this.state.result.slice();
    for (const [partnerTargetIndex, partnerTarget] of partner.targets.entries()) {
      const allele = partnerTarget.allele;
      if (allele) {
        const resultText = parentIndex === 0 ? `${allele.name}${alleleName}` : `${alleleName}${allele.name}`;
        const resultIndex = parentIndex === 0 ? this.getResultIndex(targetIndex, partnerTargetIndex) :
            this.getResultIndex(partnerTargetIndex, targetIndex);
        newResult[resultIndex] = resultText;
      }
    }
    this.setState({result: newResult}, () => {
      console.log(`set result:`);
      console.log(this.state);
    });
  }

  getResultIndex(motherTargetIndex: number, fatherTargetIndex: number) {
    return motherTargetIndex + fatherTargetIndex * 2;
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
                  <h5>Alleles</h5>
                  {this.state.choices.map((choice, index) => 
                    <Draggable key={index} draggableId={`allele${index}`} index={index}>
                      {(provided, snapshot) => {
                        return (
                          <div className="choice-wrap" ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                            <Choice allele={choice}/>
                          </div>
                        );
                      }}
                    </Draggable>
                  )}
                </div>
              )}
            </Droppable>
            <div>
              <div className="square-wrap">
                <div className="spacer">
                  {this.isClean ? null : <button onClick={this.reset} disabled={this.isClean}>Reset</button> }
                </div>
                <div className="parent1">
                  <Parent title={this.state.parents[0].title} targets={this.state.parents[0].targets} />
                </div>
              </div>
              <div className="square-wrap">
                <div className="parent2">
                  <Parent title={this.state.parents[1].title} targets={this.state.parents[1].targets} vertical={true} />
                </div>
                <Square result={this.state.result}/>
              </div>
            </div>
          </DragDropContext>
        </div>
      </div>
    )
  }
}

export default App;
