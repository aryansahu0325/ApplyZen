import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('applyzen_current_user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        if (parsed && typeof parsed === 'object' && parsed.email) {
          setUser(parsed);
        } else {
          localStorage.removeItem('applyzen_current_user');
        }
      } catch (e) {
        console.error('Error parsing current user from localStorage', e);
        localStorage.removeItem('applyzen_current_user');
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const savedUsers = localStorage.getItem('applyzen_users');
    const users = savedUsers ? JSON.parse(savedUsers) : [];

    const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (foundUser) {
      const userPayload = { fullName: foundUser.fullName, email: foundUser.email };
      localStorage.setItem('applyzen_current_user', JSON.stringify(userPayload));
      setUser(userPayload);
      return true;
    }
    return false;
  };

  const signup = (fullName, email, password) => {
    const savedUsers = localStorage.getItem('applyzen_users');
    const users = savedUsers ? JSON.parse(savedUsers) : [];

    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    const newUser = { fullName, email, password };
    users.push(newUser);
    localStorage.setItem('applyzen_users', JSON.stringify(users));

    const userPayload = { fullName, email };
    localStorage.setItem('applyzen_current_user', JSON.stringify(userPayload));
    setUser(userPayload);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('applyzen_current_user');
    setUser(null);
  };

  const loginAsGuest = () => {
    const guestUser = { fullName: 'Guest User', email: 'guest@applyzen.com', isGuest: true };
    localStorage.setItem('applyzen_current_user', JSON.stringify(guestUser));
    setUser(guestUser);
    return true;
  };

  const updateUserProfile = (updatedData) => {
    if (!user) return;
    const newUser = { ...user, ...updatedData };
    localStorage.setItem('applyzen_current_user', JSON.stringify(newUser));
    setUser(newUser);

    // Also update in registered users database to persist
    const savedUsers = localStorage.getItem('applyzen_users');
    if (savedUsers) {
      try {
        const users = JSON.parse(savedUsers);
        const index = users.findIndex(u => u.email.toLowerCase() === user.email.toLowerCase());
        if (index !== -1) {
          users[index] = { ...users[index], ...updatedData };
          localStorage.setItem('applyzen_users', JSON.stringify(users));
        }
      } catch (e) {
        console.error('Error updating profile in users list', e);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, loginAsGuest, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
