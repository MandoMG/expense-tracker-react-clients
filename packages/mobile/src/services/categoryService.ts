import {CategoriesInfo, Category, MappedCategoriesInfo} from '../types';
import ApiRoutes from '../common/ApiRoutes';
import {AxiosClient} from '../clients/AxiosClient';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';

export interface SingleCategoryParams {
  categoryId: string;
}

export interface SaveCategoryParams {
  category: Category;
}

export class CategoryService {
  private static instance: CategoryService | null = null;

  private constructor() {
    // Private constructor to prevent external instantiation.
  }

  static getInstance(): CategoryService {
    if (!CategoryService.instance) {
      CategoryService.instance = new CategoryService();
    }

    return CategoryService.instance;
  }

  async getCategoryInfo(): Promise<MappedCategoriesInfo> {
    const response = await AxiosClient.getInstance().getRequest<CategoriesInfo>(
      ApiRoutes.getCategoriesInfo,
    );

    return this.categoryInfoMapper(response);
  }

  async getSingleCategoryData({
    categoryId,
  }: SingleCategoryParams): Promise<Category> {
    const getSingleCategoryEndpoint = TextUtil.formatString(
      ApiRoutes.getSingleCategoryData,
      [categoryId],
    );

    return AxiosClient.getInstance().getRequest<Category>(
      getSingleCategoryEndpoint,
    );
  }

  async saveCategory({category}: SaveCategoryParams): Promise<void> {
    await AxiosClient.getInstance().postRequest<void>(
      ApiRoutes.saveCategory,
      category,
    );
  }

  async deleteCategory({categoryId}: SingleCategoryParams): Promise<void> {
    const deleteCategoryEndpoint = TextUtil.formatString(
      ApiRoutes.deleteCategory,
      [categoryId],
    );

    console.log('AM - deleteCategoryEndpoint: ', deleteCategoryEndpoint);
    await AxiosClient.getInstance().postRequest<void>(deleteCategoryEndpoint);
  }

  private categoryInfoMapper(
    categoryInfo: CategoriesInfo,
  ): MappedCategoriesInfo {
    const expense: string[] = [];
    const income: string[] = [];

    categoryInfo.budgetList.forEach(budgetItem => {
      if (budgetItem.isIncome) {
        income.push(budgetItem.categoryName);
      } else {
        expense.push(budgetItem.categoryName);
      }
    });

    return {
      totalBudget: categoryInfo.totalBudget,
      availableCategories: {expense, income},
      budgetList: categoryInfo.budgetList,
    };
  }
}
