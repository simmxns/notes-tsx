import * as React from 'react'

import { ITask } from './Task'
import TaskFrom from './TaskFrom'
import TaskList from './TaskList'

export class App extends React.Component<IProps, IState> {

   constructor(props: IProps){
      super(props)
      this.state = {
         tasks: []
      }
      this.deleteATask = this.deleteATask.bind(this)
   }

   addANewTask(task: ITask) {
      this.setState({
         tasks: [...this.state.tasks, task]
      })
   }

   deleteATask(id: number) {
      const tasks: ITask[] = this.state.tasks.filter(
         (task: ITask) => task.id !== id
      )
      this.setState({tasks})
   }

   render() {
      return (
         <div>
            <nav className="navbar navbar-light bg-light">
               <a className="navbar-brand" href="/">{this.props.title}</a>
            </nav>
            <div className="container p-4">
               <div className="row">
                  <div className="col-md-4">
                     <TaskFrom addANewTask={this.addANewTask.bind(this)}/>
                  </div>
                  <div className="col-md-8">
                     <div className="row">
                        <TaskList
                           tasks={this.state.tasks}
                           deleteATask={this.deleteATask}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

interface IProps {
   title: string
}

interface IState {
   tasks: ITask[]
}