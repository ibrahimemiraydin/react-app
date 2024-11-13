import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { id: string; username: string };
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (email, password) => {
    // TODO: Implement actual authentication
    set({ isAuthenticated: true, user: { id: '1', username: 'Test User' } });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));