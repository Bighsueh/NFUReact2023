import React, { useState, useEffect } from "react";
// import "./App.css";
import styled from '@emotion/styled';

//如果要建立的是 <button> 則是使用 styled.button
const Container = styled.div` 
  background-color: #ededed;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const CrudCard = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: 0 1px 3px 0 #999999;
  background-color: #f9f9f9;
  padding: 30px 15px;
  box-sizing: border-box;
`

const UserTable = (props) => (
    <table className="tableStyle">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.editRow(user);
                                }}
                            >
                                Editss
                            </button>
                            <button onClick={() => props.deleteUser(user.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
);

const AddUserForm = (props) => {
    const initialFormState = { id: null, name: "", username: "" };
    const [user, setUser] = useState(initialFormState);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!user.name || !user.username) return;
                props.addUser(user);
                setUser(initialFormState);
            }}
        >
            <label>Name </label>
            <input
                autocomplete="Off"
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            />
            <label> Username </label>
            <input
                autocomplete="Off"
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
            />
            <button>Add new user</button>
        </form>
    );
};

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                props.updateUser(user.id, user);
            }}
        >
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            />
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
            />
            <button>Update user</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                Cancel
            </button>
        </form>
    );
};

function App() {
    const usersData = [
        { id: 1, name: "Toripii", username: "我是爆炸陶樂比" },
        { id: 2, name: "Duck", username: "三隻小鴨" },
        { id: 3, name: "yoyo", username: "想不出名字" },
    ];

    const [users, setUsers] = useState(usersData);

    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const [editing, setEditing] = useState(false);
    const initialFormState = { id: null, name: "", username: "" };
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const editRow = (user) => {
        setEditing(true);

        setCurrentUser({
            id: user.id,
            name: user.name,
            username: user.username,
        });
    };
    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    };
    return (
      <Container>
        <CrudCard>
          <div className="App">
            <h1>React CRUD!</h1>
            <div>
                <div>
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
                </div>

                <div>
                    <h2>View users</h2>
                    <UserTable
                        users={users}
                        deleteUser={deleteUser}
                        editRow={editRow}
                    />
                </div>
            </div>
        </div>
        </CrudCard>
      </Container>
    );
}

export default App;