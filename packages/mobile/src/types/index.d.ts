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
