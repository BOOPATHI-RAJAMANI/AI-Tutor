import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { ref, get, set } from 'firebase/database';
import { auth, database, googleProvider, githubProvider } from '../lib/firebase';

interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  yearOfStudying: string;
  department: string;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithGithub: () => Promise<void>;
  logout: () => Promise<void>;
  saveProfile: (profile: UserProfile) => Promise<void>;
  updateProfile: (profile: UserProfile) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        const profileRef = ref(database, `users/${user.uid}`);
        const snapshot = await get(profileRef);
        if (snapshot.exists()) {
          setProfile(snapshot.val());
        } else {
          // No profile exists, so set profile to null to trigger profile setup
          setProfile(null);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const fetchProfile = async (uid: string) => {
    try {
      const profileRef = ref(database, `users/${uid}`);
      const snapshot = await get(profileRef);
      if (snapshot.exists()) {
        setProfile(snapshot.val());
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const registerWithEmail = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const loginWithGithub = async () => {
    await signInWithPopup(auth, githubProvider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const saveProfile = async (profileData: UserProfile) => {
    if (!user) return;
    const profileRef = ref(database, `users/${user.uid}`);
    await set(profileRef, profileData);
    setProfile(profileData);
  };

  const updateProfile = async (profileData: UserProfile) => {
    await saveProfile(profileData);
  };

  const value: AuthContextType = {
    user,
    profile,
    loading,
    loginWithEmail,
    registerWithEmail,
    loginWithGoogle,
    loginWithGithub,
    logout,
    saveProfile,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
