const todoList = [];

let input = prompt(`What would you like to do?`)
while (input !== `quit` && input !== `q`) {
    if (input === `new`) {
        const newTodo = prompt(`Add a new task : `);
        todoList.push(newTodo);
        console.log(`[${newTodo}] added to list`)
    } else if (input === `list`) {
        console.log(`*****************************`);
        for (let i = 0; i < todoList.length; i++) {
            console.log(`[${i}] ${todoList[i]}`);
        }
        console.log(`*****************************`);
    } else if (input === `delete`) {
        const erase = parseInt(prompt(`Insert the Index-Number of the item you want to delete : `));
        if (!Number.isNaN(erase)) {
            const deleted = todoList.splice(erase, 1);
        console.log(`[${deleted}] -> was deleted from the list`)
        }
    } else if (input !== `new` && input !== `list` && input !== `delete`){
        console.log(`We need a valid command from the list!`)
    }

    input = prompt(`Whats now?`)

} 

if (input === `quit` || input === `q`) {
    console.log(`Todo-List closed`);
}