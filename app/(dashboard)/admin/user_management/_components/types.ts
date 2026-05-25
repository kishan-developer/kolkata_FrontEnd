export type UserRole = 'Super Admin' | 'Admin' | 'Manager' | 'Accountant' | 'GST Expert' | 'IT Expert' | 'Client';
export type UserStatus = 'active' | 'inactive' | 'blocked' | 'pending';

export interface User {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  status: UserStatus;
  assignedServices: string[];
  lastLogin: string;
  createdDate: string;
  manager?: string;
  documents?: { name: string; type: string; status: string }[];
  tasks?: { id: string; title: string; deadline: string; status: string; priority: string }[];
  complianceScore?: number;
  kycStatus?: 'verified' | 'pending' | 'rejected';
}

export interface UserFilters {
  role: string;
  status: string;
  serviceType: string;
  dateRange: { start: string; end: string } | 'all';
  searchQuery: string;
  kyc: string;
  plan: string;
  compliance: string;
  risk: string;
  frequency: string;
  manager: string;
  lastActive: string;
}
