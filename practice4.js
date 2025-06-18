const prompt = require("prompt-sync")();
const fs = require("fs");
const filepath = "tasks.json";
const menuDisplay =
  'Choose option:\n add:enter add "(task details)" \n remove: enter remove<(task number)> \n show list: enter list \n ';
function getTasks() {
  const rawTasks=fs.readFileSync(filepath,"utf-8");
  if(!rawTasks.trim())return[];
  const taskList = JSON.parse(rawTasks);
  return taskList
}

function addTask(task) {
  const arr = getTasks();
  const taskNumber = arr.slice(-1)[0]?.taskNumber+1 || 1;
  arr.push({ taskNumber, task });
  fs.writeFileSync(filepath,JSON.stringify(arr))
    
}
function removeTask(taskId){
    const arr = getTasks();
    const filteredArr=arr.filter(t=>t.taskNumber!=taskId)
    fs.writeFileSync(filepath,JSON.stringify(filteredArr))
}

 while (true){
  const choice = prompt(menuDisplay);
  
    if(choice.startsWith("add")){
      let startIndex = choice.indexOf('"');
      if (startIndex === -1) {
        console.log("invalid task input");
        continue;
      }
      const task = choice.slice(startIndex + 1, choice.lastIndexOf('"'));
      addTask(task);
    }
    else if (choice.startsWith("remove")){
      startIndex = choice.indexOf("<");
      const endIndex = choice.indexOf(">");
      const removeId = choice.slice(startIndex + 1, endIndex);
      if (startIndex === -1 || endIndex === -1 || !removeId){
        console.log("invalid input");
      continue;
      }
      removeTask(removeId)
    }
    else if (choice.startsWith('list')){
    console.log(getTasks());
    }
}