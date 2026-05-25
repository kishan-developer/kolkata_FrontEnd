export type TaskPriority = 'High' | 'Medium' | 'Low' | 'Critical';
export type TaskStatus = 'To Do' | 'In Progress' | 'Review' | 'Completed';

export interface Task {
  id: string;
  title: string;
  clientName: string;
  serviceName: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignedTo: string;
  dueDate: string;
  description?: string;
  tags?: string[];
}

export interface TeamWorkload {
  name: string;
  role: string;
  taskCount: number;
  statusBreakdown: {
    todo: number;
    inProgress: number;
    review: number;
    completed: number;
  };
}
