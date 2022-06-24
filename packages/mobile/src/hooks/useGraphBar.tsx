import { BudgetSummaryItem } from "../types";

const useGraphBar = () => {
  const getGraphPercentage = (budgetItem: BudgetSummaryItem) => {
    if (budgetItem.categoryValue === 0 || !budgetItem.hasBudget) {
      return 0
    }

    const percentage = (budgetItem.categoryValue / budgetItem.categoryBudget) * 100;
    if (percentage >= 100) {
      return 100;
    };

    return Number(percentage.toFixed(0));
  };

  return { getGraphPercentage };
};

export default useGraphBar;