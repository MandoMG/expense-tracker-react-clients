import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  CategoryService,
  SaveCategoryParams,
  SingleCategoryParams,
} from '../../services/categoryService';

export const getCategoriesInfo = createAsyncThunk(
  'category/getInfo',
  async () => {
    return await CategoryService.getInstance().getCategoryInfo();
  },
);

export const getCategoryItem = createAsyncThunk(
  'category/getCategoryItem',
  async ({categoryId}: SingleCategoryParams) => {
    return await CategoryService.getInstance().getSingleCategoryData({
      categoryId,
    });
  },
);

export const saveCategory = createAsyncThunk(
  'category/saveCategory',
  async ({category}: SaveCategoryParams) => {
    await CategoryService.getInstance().saveCategory({
      category,
    });
  },
);

export const deleteCategoryById = createAsyncThunk(
  'category/deleteCategoryById',
  async ({categoryId}: SingleCategoryParams) => {
    await CategoryService.getInstance().deleteCategory({
      categoryId,
    });
  },
);
