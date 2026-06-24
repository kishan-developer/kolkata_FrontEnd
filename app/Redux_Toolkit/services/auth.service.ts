const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

interface SendOtpData {
  email: string;
  phone?: string;
}

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  otp?: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface ForgotPasswordTokenData {
  email: string;
}

interface ChangePasswordData {
  oldPassword: string;
  newPassword: string;
}

interface ResetPasswordData {
  token: string;
  newPassword: string;
}

export const authService = {
  // Send OTP
  sendOtp: async (data: SendOtpData) => {
    const response = await fetch(`${API_URL}/auth/send-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Register User
  register: async (data: RegisterData) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Login
  login: async (data: LoginData) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Forgot Password Token
  forgotPasswordToken: async (data: ForgotPasswordTokenData) => {
    const response = await fetch(`${API_URL}/auth/forgot-password-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Change Password (requires authentication)
  changePassword: async (data: ChangePasswordData, token: string) => {
    const response = await fetch(`${API_URL}/auth/change-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Reset Password with Token
  resetPassword: async (data: ResetPasswordData) => {
    const response = await fetch(`${API_URL}/auth/forgot-password/${data.token}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPassword: data.newPassword }),
    });
    return response.json();
  },

  // Validate Forgot Password Token
  validateForgotPasswordToken: async (token: string) => {
    const response = await fetch(`${API_URL}/auth/validate-forgot-password-token/${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  // Logout
  logout: async (token: string) => {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },

  // Regenerate Token
  regenerateToken: async (token: string) => {
    const response = await fetch(`${API_URL}/auth/regenerate-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },

  // Get User Details (requires authentication)
  getUserDetails: async (token: string) => {
    const response = await fetch(`${API_URL}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },
};

// Helper functions for localStorage management
export const authStorage = {
  setToken: (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  },

  getToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  },

  setRefreshToken: (refreshToken: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('refreshToken', refreshToken);
    }
  },

  getRefreshToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('refreshToken');
    }
    return null;
  },

  setUser: (user: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  },

  getUser: () => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  },

  clearAuth: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    }
  },

  isAuthenticated: () => {
    const token = authStorage.getToken();
    return !!token;
  },
};