const USERS = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    role: "ADMIN",
    name: "Administrator"
  },
  {
    id: 2,
    username: "manager",
    password: "manager123",
    role: "MANAGER",
    name: "Store Manager"
  },
  {
    id: 3,
    username: "staff",
    password: "staff123",
    role: "STAFF",
    name: "Store Staff"
  }
];

const STORAGE_KEY = "aims-user";

export async function login(username, password) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    throw new Error("Invalid username or password.");
  }

  const loggedInUser = {
    id: user.id,
    username: user.username,
    role: user.role,
    name: user.name,
    token: "mock-jwt-token"
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedInUser));

  return loggedInUser;
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getCurrentUser() {
  const user = localStorage.getItem(STORAGE_KEY);

  return user ? JSON.parse(user) : null;
}

export function isAuthenticated() {
  return getCurrentUser() !== null;
}