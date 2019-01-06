function completeTask(task){
  task.complete = true;
}

function newTask(title, description){
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(`${this.title} has ${this.complete ? " " : " not " }been completed`);
    },

    markCompleted: function () {
      this.complete = true;
    }
  };
  return task;
};

const task1 = newTask("Clean Cat Litter", "Take out the litter box");
const task2 = newTask("Do Laundry", "Oops");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

task1.title
task1.markCompleted();
