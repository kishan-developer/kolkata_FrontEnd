export type ClientStatus = 'Active' | 'Pending' | 'Completed' | 'On-Hold';
export type EntityType = 'Proprietorship' | 'Partnership' | 'LLP' | 'Private Limited' | 'Public Limited' | 'Trust' | 'Society' | 'Individual';

export interface Client {
  id: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  entityType: EntityType;
  status: ClientStatus;
  assignedTeam: string[];
  servicePackage: string;
  complianceScore: number;
  lastFiling: string;
  joinedDate: string;
  riskProfile: 'Low' | 'Medium' | 'High';
}

export interface ClientFilters {
  status: string;
  entityType: string;
  servicePackage: string;
  team: string;
  searchQuery: string;
}
