
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
    deleteShoppingCart
}