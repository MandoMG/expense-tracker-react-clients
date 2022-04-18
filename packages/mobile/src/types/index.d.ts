export type TabNavigationPropsParams = {
  Category: { category: Category }
}

export type TabNavigationScreensParams = {
  Categories: undefined,
  CategoryDetail: { category: Category }
}

export interface Category {
  id: number;
  name: string;
  budget: number;
  hasBudget: boolean;
  isExpense: boolean;
}

export interface Record {
  id: number;
  description: string;
  categoryName: string;
  date: string;
  amount: number;
  isExpense: boolean;
}

export interface DashboardInfo {
  featureLabels: DashboardFeatureLabels;
  pillsData: PillsData;
  budgetSummaryData: BudgetSummaryItem[];
}

export interface DashboardFeatureLabels {
  title: string;
  monthYear: string;
  budgetSummary: string;
}

export interface PillsData {
  currentBalance: number;
  income: number;
  expenses: number;
}

export interface BudgetSummaryItem {
  categoryName: string;
  categoryValue: number;
  categoryBudget: number;
  budgetDifference: number;
  hasBudget: boolean;
  isUnderBudget: boolean;
}

export interface RecordsInfo {
  featureLabels: RecordsFeatureLabels;
  pillsData: PillsData;
  currentBudgetData: BudgetSummaryItem[];
  recordItemData: Record[];
}

export interface RecordsFeatureLabels {
  title: string;
  monthYear: string;
  budgets: string;
  activity: string;
}
