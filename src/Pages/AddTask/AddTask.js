import React from 'react';
import { Link } from 'react-router-dom';
import { addTaskToDb } from '../../utilities/fakedb';

const AddTask = () => {

    const handleAddTask = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const priority = form.priority.value;
        const date = form.date.value;

        addTaskToDb(title,description,priority,date);
    }

    return (
        <div className="flex-shrink w-full max-w-md mx-auto bg-base-100">
            <form onSubmit={handleAddTask} className="card-body">
                <h1 className="text-5xl font-bold pt-1 text-center">Add Task</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Title" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description' placeholder="Description" className="input input-bordered max-h-20" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Priority</span>
                    </label>
                    <select type="text" name='priority' className="input input-bordered">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name='date' placeholder="Date" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type='submit' value="add task"></input>
                </div>
            </form>
        </div>
    );
};

export default AddTask;