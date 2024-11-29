import React, { createContext, useReducer, useEffect } from "react";

// Initial state
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      };
    case "LOGIN_FAILURE":
    case "SIGNUP_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

// Create context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Checking if a token exists in localStorage on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({ type: "LOGIN_SUCCESS", payload: { token, user: {} } });
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/accounts/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        dispatch({ type: "LOGIN_FAILURE", payload: errorData.message });
        return;
      }

      const data = await response.json();
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user: data.user, token: data.token },
      });

      localStorage.setItem("token", data.token);
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: "An error occurred. Try again." });
    }
  };

  // Signup function
  const signup = async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/accounts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        dispatch({ type: "SIGNUP_FAILURE", payload: errorData.message });
        return;
      }

      const data = await response.json();
      dispatch({
        type: "SIGNUP_SUCCESS",
        payload: { user: data.user, token: data.token },
      });

      localStorage.setItem("token", data.token);
    } catch (error) {
      dispatch({ type: "SIGNUP_FAILURE", payload: "An error occurred. Try again." });
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ state, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
