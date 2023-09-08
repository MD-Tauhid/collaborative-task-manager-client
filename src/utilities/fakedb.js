// manage user
const addUserToDb = (name, email, bio, image) =>{
    const data = {
        name: name,
        email: email,
        bio: bio,
        image: image
    };

    let prevUsers = {};
    let newUsers = [];
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
        prevUsers = JSON.parse(storedUser);
        newUsers = [...prevUsers, data];
    }
    else {
        newUsers = [data];
    }

    localStorage.setItem('userData', JSON.stringify(newUsers));
}


const getUserFromDb = () =>{
    let totalUser = {};

    const storedUser = localStorage.getItem('userData');
    if(storedUser){
        totalUser = JSON.parse(storedUser);
    }
    return totalUser;
}


// task manage
const addTaskToDb = (title, description, priority, date) =>{
    const data = {
        title: title,
        description: description,
        priority: priority,
        date: date
    };

    let prevTask = {};
    let newTask = [];
    const storedTask = localStorage.getItem('task');
    if (storedTask) {
        prevTask = JSON.parse(storedTask);
        newTask = [...prevTask, data];
    }
    else {
        newTask = [data];
    }

    localStorage.setItem('task', JSON.stringify(newTask));
}

const getTaskFromDb = () =>{
    let totalTask = {};

    const storedTask = localStorage.getItem('task');
    if(storedTask){
        totalTask = JSON.parse(storedTask);
    }
    return totalTask;
}

// other section
const removeFromDb = id =>{
    const storedCart = localStorage.getItem('userData');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('user-data', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('user-data');
}

export {
    addUserToDb, 
    getUserFromDb,
    removeFromDb,
    addTaskToDb,
    getTaskFromDb,
    deleteShoppingCart
}