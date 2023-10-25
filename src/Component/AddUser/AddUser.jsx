import React, { useState } from 'react';

const AddUser = () => {

    const [user, setUser] = useState({});
    console.log(user);


    const handleAddUser = (e) =>{
        e.preventDefault();
        console.log("clicked the button");
        const form = e.target;
    }

    const handleOnBlur = (e) =>{
        e.preventDefault();
        const field = e.target.name;
        // console.log(field);
        const value = e.target.value;
        // console.log(value);
        const newUser = {...user};
        newUser [field] = value;
        setUser(newUser)
    }
    return (
        <>
        <form onSubmit={handleAddUser} className='bg-warning m-5 p-5 rounded-2'>
            <div className="mb-3 text-start">
                <label  className="form-label">Name</label>
                <input onBlur={handleOnBlur} type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 text-start">
                <label  className="form-label">Email</label>
                <input onBlur={handleOnBlur} type="email" name="email" className="form-control" id="exampleInputPassword1" />
            </div>
            
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
        </>
    );
};

export default AddUser;