import React from 'react';

function TaskList({ tasks }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tasks.map(task => (
                <div key={task.id} className="bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-lg p-4">
                    <h3 className="text-lg font-bold mb-2" >{task.content}</h3>
                    <p className="text-gray-600 mb-1">Descripción: {task.description}</p>
                    <a href={task.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">Ver Tarea</a>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
