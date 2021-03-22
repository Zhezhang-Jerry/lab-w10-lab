const todoList = [
    {todo: "clone repo for starter code", status: "complete"},
    {todo: "add css and js to index", status: "complete"},
    {todo: "finish the app.js", status: "started"},
    {todo: "finish the lab", status: "started"}
]
const completedTodos = []

for (const i in todoList) {
    if (todoList[i].status === "complete") {
        completedTodos.push(todoList[i])
    }
}

for (const i in completedTodos) {
    const {todo} = completedTodos[i]
    console.log(todo)
}

