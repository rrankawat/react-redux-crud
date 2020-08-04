import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import UserItem from './UserItem';
import AddUser from './AddUser';

const Users = () => {
  const [users, setUsers] = useState([]);

  const [addUserModal, setAddUserModal] = useState(false);
  const toggleAddUserModal = () => setAddUserModal(!addUserModal);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(`/users`);
      setUsers(res.data);
    };
    getUsers();
  }, []);

  return (
    <Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Users</h1>
        <button className="btn btn-primary mb-2" onClick={toggleAddUserModal}>
          Add New
        </button>
      </div>

      {users && users.map((user) => <UserItem key={user.id} user={user} />)}

      <AddUser modal={addUserModal} toggle={toggleAddUserModal} />
    </Fragment>
  );
};

export default Users;
