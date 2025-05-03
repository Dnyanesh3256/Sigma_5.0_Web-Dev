let todo = [];

let req = prompt("Enter your choice : ");

while(true){
    if(req == "quit"){
        console.log("You quit game.");
        break;
    }

    if(req == "list"){
        console.log("--------------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("--------------------------");
    }else if(req == "add"){
        let task = prompt("Enter the task you want to add : ");
        todo.push(task);
        console.log("Task Added.");
    }else if(req == "delete"){
        let idx = prompt("Enter the task index you want to delete : ");
        todo.splice(idx, 1);
        console.log("Task Deleted.");
    }else{
        console.log("Wrong Choice. Enter valid choice!!");
    }

    req = prompt("Enter your choice : ");
}