export type ServiceCategory = 
  | 'Business Registration' 
  | 'Income Tax' 
  | 'GST' 
  | 'Audit' 
  | 'MCA' 
  | 'Startup' 
  | 'Loan' 
  | 'Legal' 
  | 'Advisory';

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  basePrice: number;
  timeline: string;
  requiredDocs: string[];
  activeClients: number;
  status: 'Active' | 'Draft' | 'Archived';
  description: string;
}

export interface ServiceTask {
  id: string;
  clientName: string;
  serviceName: string;
  assignedTo: string;
  progress: number;
  status: 'Not Started' | 'In Progress' | 'Review' | 'Completed';
  dueDate: string;
}
