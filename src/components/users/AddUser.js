import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'reactstrap';

const AddUser = ({ modal, toggle }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    history.push('/users');
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <div className="modal-body">
        <h2 className="text-center mb-4">Add User</h2>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-danger btn-sm float-right ml-2">
              Cancel
            </button>
            <button className="btn btn-success btn-sm float-right">Add</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddUser;
