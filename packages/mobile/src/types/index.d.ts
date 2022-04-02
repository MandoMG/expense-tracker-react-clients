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
