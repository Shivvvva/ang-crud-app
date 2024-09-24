import { EmpTypes } from './EmployeeTypes';
import { v4 as uuid } from 'uuid';

const LOCAL_STORAGE_KEY = 'users';

const UserService = {
  getAllUsers: (): EmpTypes[] => {
    const users = localStorage.getItem(LOCAL_STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  },

  addUsers: (): EmpTypes => {
    const users = UserService.getAllUsers();
    const User: EmpTypes = {
      id: uuid().slice(0, 8),
      firstName: '',
      lastName: '',
      age: 0,
      email: '',
    };
    const updatedUser = [...users, User];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUser));
    return User;
  },

  updateUser: (user: EmpTypes) => {
    const users: EmpTypes[] = UserService.getAllUsers();
    const updatedUser = users.map((u) => (u.id === user.id ? user : u));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUser));

    return user;
  },

  deleteUser: (id: string): void => {
    const users = UserService.getAllUsers();
    const updatedUsers = users.filter((u) => u.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUsers));
  },
};

export default UserService;
