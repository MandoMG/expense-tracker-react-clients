import {createSelector, createSlice} from '@reduxjs/toolkit';
import {getCategoriesInfo, getCategoryItem} from '../thunks/categoriesThunks';
import {AvailableCategories, BudgetSummaryItem, Category} from '../../types';
import {RootState} from '../store';

export interface CategoryState {
  totalBudget: number;
  availableCategories: AvailableCategories;
  budgetList: BudgetSummaryItem[];
  isLoading: boolean;
  hasError: boolean;
  selectedCategory: Category | null;
}

const initialState: CategoryState = {
  totalBudget: 0,
  budgetList: [],
  isLoading: false,
  hasError: false,
  availableCategories: {expense: [], income: []},
  selectedCategory: null,
};
export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    resetSelectedCategory: state => {
      state.selectedCategory = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCategoriesInfo.fulfilled, (state, action) => {
        state.totalBudget = action.payload.totalBudget;
        state.budgetList = action.payload.budgetList;
        state.availableCategories = action.payload.availableCategories;
      })
      .addCase(getCategoryItem.fulfilled, (state, action) => {
        state.selectedCategory = action.payload;
      })
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          console.log(action.type);
          state.isLoading = false;
        },
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          console.log(action.type);
          state.isLoading = false;
        },
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, _action) => {
          state.isLoading = true;
          state.hasError = false;
        },
      );
  },
});

export const {resetSelectedCategory} = categorySlice.actions;

export const selectCategoriesInfo = createSelector(
  (state: RootState) => state.category,
  category => {
    return {
      budgetList: category.budgetList,
      totalBudget: category.totalBudget,
    };
  },
);

export const selectCategoryInFocus = createSelector(
  (state: RootState) => state.category,
  category => {
    return category.selectedCategory;
  },
);

export const selectIsCategoryLoading = createSelector(
  (state: RootState) => state.category,
  category => {
    return category.isLoading;
  },
);

export default categorySlice.reducer;
