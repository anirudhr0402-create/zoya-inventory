const users = [
  {
    id: 1,
    username: "admin",
    role: "ADMIN",
    name: "Administrator"
  },
  {
    id: 2,
    username: "manager",
    role: "MANAGER",
    name: "Store Manager"
  },
  {
    id: 3,
    username: "staff",
    role: "STAFF",
    name: "Store Staff"
  }
];

export async function getUsers() {
  await new Promise((resolve) =>
    setTimeout(resolve, 300)
  );

  return users;
}