const todoList = {
    todo1: "clone repo for starter code", status1: "complete",
    todo2: "add css and js to index", status2: "complete",
    todo3: "finish the app.js", status3: "started",
    todo4: "finish the lab", status4: "started"
}
const todoArr = []
const completedTodos = {}

for (const key in todoList) {
    todoArr.push(key, todoList[key])
}

for (const i in todoArr) {
    if (todoArr[i] === "complete") {
        completedTodos[todoArr[i-3]] = todoArr[i-2]
    }

}
console.log(completedTodos)
for (const key in completedTodos) {
    console.log(completedTodos[key])
}