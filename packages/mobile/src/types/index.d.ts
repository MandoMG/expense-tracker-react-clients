export type TabNavigationPropsParams = {
  Category: { category: Category }
}

export type TabNavigationScreensParams = {
  Categories: undefined,
  CategoryDetail: { category: Category }
}

export interface Category {
  _id?: number;
  name: string;
  budget: number;
  hasBudget: boolean;
  isExpense: boolean;
  isIncome?: boolean; // tempValue
}

export interface Record {
  _id?: number;
  description: string;
  category: string;
  recordDate: string;
  amount: number;
  isIncome: boolean;
}

export interface DashboardInfo {
  summaryData: SummaryData;
  recordSummaryData: Record[];
  budgetSummaryData: BudgetSummaryItem[];
}

export interface DashboardFeatureLabels {
  title: string;
  monthYear: string;
  budgetSummary: string;
}

export interface SummaryData {
  currentBalance: number;
  income: number;
  expenses: number;
}

export interface BudgetSummaryItem {
  id: string;
  categoryName: string;
  categoryValue: number;
  categoryBudget: number;
  budgetDifference: number;
  hasBudget: boolean;
  isUnderBudget: boolean;
}

export interface RecordsInfo {
  summaryData: SummaryData;
  currentBudgetData: BudgetSummaryItem[];
  recordItemData: Record[];
}

export interface PreviousMonthsRecordInfo {
  monthYear: string;
  balance: number;
  income: number;
  expenses: number;
}

export interface CategoriesInfo {
  budgetList: BudgetSummaryItem[];
  totalBudget: number;
}
