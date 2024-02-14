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
  async ({category}: SaveCategoryParams, thunkAPI) => {
    await CategoryService.getInstance().saveCategory({
      category,
    });
    thunkAPI.fulfillWithValue(true);
  },
);

export const deleteCategoryById = createAsyncThunk(
  'category/deleteCategory',
  async ({categoryId}: SingleCategoryParams, thunkAPI) => {
    await CategoryService.getInstance().deleteCategory({
      categoryId,
    });

    thunkAPI.fulfillWithValue(true);
  },
);
