const ApiRoutes = {
  getDashboardInfo: 'api/dashboard/getInfo',

  getCategoriesInfo: 'api/categories/getInfo',
  getSingleCategoryData: 'api/categories/getCategoryData/{0}',
  deleteCategory: 'api/categories/deleteCategory/{0}',
  saveCategory: 'api/categories/saveCategory',
  updateCategory: 'api/categories/updateCategory/{0}',

  getRecordInfo: 'api/records/getInfo',
  getMonthRecordData: 'api/records/getMonthInfo/{0}/{1}',
  getSingleRecordInfo: 'api/records/getRecordData/{0}',
  getRecordCategories: 'api/records/getRecordsCategories/{0}',
  deleteRecord: 'api/records/deleteRecord/{0}',
  saveRecord: 'api/records/saveRecord',
  updateRecord: 'api/records/updateRecord/{0}',
  getPreviousMonthsRecordInfo: 'api/records/getPreviousMonthsInfo'
};

export default ApiRoutes;
