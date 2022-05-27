import { v4 as uuidv4 } from "uuid"; // Gives a unique id tag

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  // All the properties of user is listed using the spread operator, with id as an addition to the existing user property
  users.push({ ...user, id: uuidv4() });

  res.send(`User ${user.firstName} was added to the database`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const findUser = users.find((user) => user.id === id);
  res.send(findUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`User ${id} was deleted successfully`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const updateUser = users.find((user) => user.id === id);

  if (firstName) updateUser.firstName = firstName;

  if (lastName) updateUser.lastName = lastName;

  if (age) updateUser.age = age;

  res.send(`User ${id} is updated`);
};
