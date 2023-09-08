import React from 'react';

const TaskItems = ({task}) => {

    const {title, description, priority, date} = task;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className='max-w-xl'>
                    {description}
                </div>
            </td>
            <td>{date}</td>
            <td>{priority}</td>
            <th>
                <button className="btn btn-ghost btn-xs">pending</button>
            </th>
        </tr>
    );
};

export default TaskItems;