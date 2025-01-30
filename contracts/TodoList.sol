// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TodoList {
    struct Task {
        string content;
        bool completed;
    }

    Task[] public tasks;

    function addTask(string memory _content) public {
        tasks.push(Task({content: _content, completed: false}));
    }

    function getTasks() public view returns (Task[] memory) {
        return tasks;
    }
}
