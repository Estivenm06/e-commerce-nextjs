import { useEffect, useState } from "react";
import type { AlertType, User } from "../utils/types";

const API_URL = process.env.NEXT_PUBLIC_API;

const useUser = (
  showAlert: (alert: AlertType) => void,
  dispatch: React.Dispatch<{ type: string; payload?: any }>
) => {
  const [users, setUsers] = useState<User[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { username, token } = JSON.parse(storedUser);
      setToken(token);
      setUser(username);
      setLoading(false);
    }
    fetchUsers();
  }, [token, user]);

  if (!API_URL) {
    showAlert({
      message: "API URL is not defined",
      type: "error",
    });
    return {
      token: null,
      onSubmit: () => {},
      logout: () => {},
      user: null,
      loading: true,
    };
  }

  // Function to fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/users`);
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      const usersList = data.map(
        ({ username, password, id }: { username: string; password: string; id: number }) => {
          return { username, password, id };
        }
      );
      setUsers(usersList);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        showAlert({
          message: error.message,
          type: "error",
        });
      }
      setLoading(false);
    }
  };

  // Function to handle user login
  const LoginUser = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then(async (response) => {
      if (!response.ok) {
        if (response.status === 401) {
          showAlert({
            message: "Invalid username or password",
            type: "error",
          });
        }
      }

      const data = await response.json();

      if (!data.token) {
        showAlert({
          message: "Login failed, no token received",
          type: "error",
        });
        return;
      }

      localStorage.setItem(
        "user",
        JSON.stringify({ username, token: data.token })
      );
      setUser(username);
      setToken(data.token);
      dispatch({ type: "LOAD_CART", payload: { username } });
      window.location.href = "/";
      return data;
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    if (username.trim() === "" || password.trim() === "") {
      showAlert({
        message: "Username and password are required",
        type: "warning",
      });
      return;
    }

    LoginUser({ username, password });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setToken(null);
    showAlert({
      message: "Logged out successfully",
      type: "success",
    });
  };

  return { token, onSubmit, LoginUser, logout, user, loading, users };
};

export { useUser };
