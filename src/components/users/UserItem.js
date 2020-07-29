import React, { useState, Fragment } from 'react';
import EditUser from './EditUser';

const UserItem = ({ user }) => {
  const [editUserModal, setEditUserModal] = useState(false);
  const toggleEditUserModal = () => setEditUserModal(!editUserModal);

  return (
    <Fragment>
      <div className="card my-2">
        <div className="card-body d-flex justify-content-between">
          <div className="mt-1">{user.name}</div>
          <div>
            <button
              className="btn btn-secondary btn-sm"
              onClick={toggleEditUserModal}
            >
              Edit
            </button>
            <button className="btn btn-danger btn-sm ml-2">Delete</button>
          </div>
        </div>
      </div>

      <EditUser modal={editUserModal} toggle={toggleEditUserModal} />
    </Fragment>
  );
};

export default UserItem;
