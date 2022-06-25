const ApiRoutes = {
  getDashboardInfo: 'api/dashboard/getInfo',

  getCategoryInfo: 'api/categories/getInfo',
  deleteCategory: 'api/categories/deleteCategory/{0}',
  saveCategory: 'api/categories/saveCategory',
  updateCategory: 'api/categories/updateCategory/{0}',

  getRecordInfo: 'api/records/getInfo',
  getRecordCategories: 'api/records/getRecordsCategories/{0}',
  deleteRecord: 'api/records/deleteRecord/{0}',
  saveRecord: 'api/records/saveRecord',
  updateRecord: 'api/records/updateRecord'
};

export default ApiRoutes;