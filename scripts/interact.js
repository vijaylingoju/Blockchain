async function main() {
    const [owner] = await ethers.getSigners();
    console.log("Interacting with TodoList contract using:", owner.address);
  
    // Attach to the contract using its address
    const TodoList = await ethers.getContractFactory("TodoList");
    const todoList = await TodoList.attach("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");
  
    // Add a task
    const addTx = await todoList.addTask("Learn Solidity!");
    await addTx.wait();
  
    console.log("Task added!");
  
    // Fetch all tasks
    const tasks = await todoList.getTasks();
    console.log("Current tasks:", tasks);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  