import React from 'react';
import TaskItems from './TaskItems';
import { useNavigate } from 'react-router-dom';
import { getTaskFromDb } from '../../utilities/fakedb';

const Task = () => {
    const navigate = useNavigate();

    const tasks = getTaskFromDb();

    return (
        <div className="overflow-x-auto mx-auto px-10">
            <button onClick={() => navigate('/addtask')} className='btn btn-warning my-5 mx-3'>Add Task</button>

            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {tasks.map(task => <TaskItems task={task} ></TaskItems>)}

                </tbody>
            </table>
        </div>
    );
};

export default Task;