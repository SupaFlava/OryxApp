import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "bboyrami@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "John@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "Jane@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
