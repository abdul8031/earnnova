export interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  reward: number;
  time: number;
  dailyLimit: number;
  taskUrl: string;
  status: "active" | "inactive";
  clicks: number;
  completions: number;
}