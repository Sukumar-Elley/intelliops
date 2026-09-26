// ============================================================
// IntelliOps Shared TypeScript Domain Contracts
// ============================================================

export type UUID = string;

export type Priority = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export type TaskStatus = 'BACKLOG' | 'TODO' | 'IN_PROGRESS' | 'IN_REVIEW' | 'DONE';

export interface User {
  id: UUID;
  email: string;
  firstName: string;
  lastName: string;
  role: 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER';
  avatarUrl?: string;
  createdAt: string;
}

export interface Organization {
  id: UUID;
  name: string;
  slug: string;
  plan: 'FREE' | 'PRO' | 'ENTERPRISE';
  createdAt: string;
}

export interface Team {
  id: UUID;
  organizationId: UUID;
  name: string;
  description?: string;
  memberCount: number;
  createdAt: string;
}

export interface Project {
  id: UUID;
  organizationId: UUID;
  teamId?: UUID;
  name: string;
  key: string;
  description?: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'COMPLETED';
  taskCount: number;
  createdAt: string;
}

export interface Task {
  id: UUID;
  projectId: UUID;
  organizationId: UUID;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: Priority;
  assigneeId?: UUID;
  storyPoints?: number;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Incident {
  id: UUID;
  organizationId: UUID;
  title: string;
  description: string;
  severity: 'P1' | 'P2' | 'P3' | 'P4';
  status: 'OPEN' | 'INVESTIGATING' | 'MITIGATED' | 'RESOLVED';
  serviceName: string;
  assignedResponder?: string;
  detectedAt: string;
  resolvedAt?: string;
}

export interface DoraMetrics {
  deploymentFrequency: number;
  leadTimeHours: number;
  mttrHours: number;
  changeFailureRatePercent: number;
  period: string;
}

export interface WorkflowRule {
  id: UUID;
  name: string;
  triggerType: 'EVENT' | 'SCHEDULE' | 'WEBHOOK';
  eventType?: string;
  actionType: 'SLACK_NOTIFY' | 'CREATE_TASK' | 'TRIGGER_AI_TRIAGE' | 'WEBHOOK';
  isActive: boolean;
  executionCount: number;
}

export interface NotificationItem {
  id: UUID;
  userId: UUID;
  type: 'INCIDENT_TRIGGERED' | 'TASK_ASSIGNED' | 'WORKFLOW_COMPLETED' | 'COMMENT_MENTION';
  title: string;
  body: string;
  isRead: boolean;
  createdAt: string;
}

export interface RagDocument {
  id: UUID;
  title: string;
  contentType: string;
  chunkCount: number;
  fileSizeBytes: number;
  status: 'PENDING' | 'INDEXED' | 'FAILED';
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
  timestamp: string;
}
