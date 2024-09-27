// import { EmpTypes } from './EmployeeTypes';

// const LOCAL_STORAGE_KEY = 'employees';

// const EmpService = {
//   getAllUsers: (): EmpTypes[] => {
//     const users = localStorage.getItem(LOCAL_STORAGE_KEY);
//     return users ? JSON.parse(users) : [];
//   },

//   addUsers: (): EmpTypes => {
//     const users = EmpService.getAllUsers();
//     const User: EmpTypes = {
//       id: 0,
//       fName: '',
//       lName: '',
//       age: 0,
//       email: '',
//     };
//     const updatedUser = [...users, User];
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUser));
//     return User;
//   },

//   updateUser: (user: EmpTypes) => {
//     const users: EmpTypes[] = EmpService.getAllUsers();
//     const updatedUser = users.map((u) => (u.id === user.id ? user : u));
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUser));

//     return user;
//   },

//   deleteUser: (id: number): void => {
//     const users = EmpService.getAllUsers();
//     const updatedUsers = users.filter((u) => u.id !== id);
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUsers));
//   },
// };

// export default EmpService;
