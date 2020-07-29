import React, { Fragment, useState } from 'react';
import UserItem from './UserItem';
import AddUser from './AddUser';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Steve Jobs',
    },
    {
      id: 3,
      name: 'Larry Wattson',
    },
  ]);

  const [addUserModal, setAddUserModal] = useState(false);
  const toggleAddUserModal = () => setAddUserModal(!addUserModal);

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
