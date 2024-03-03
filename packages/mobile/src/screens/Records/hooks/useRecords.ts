import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import ApiRoutes from '../../../common/ApiRoutes';
import useAxios from '../../../hooks/useAxios';
import {Category, Record} from '../../../types';
import {useAppDispatch as useDispatch} from '../../../redux/hooks';
import {
  deleteRecordById,
  saveRecord,
  updateRecord,
} from '../../../redux/thunks/recordsThunks';

interface useRecordsProps {
  isRecordIncome?: boolean;
}

interface RecordCategoryResponse {
  categories: Category[];
}

const useRecords = (props?: useRecordsProps) => {
  const {getRequest} = useAxios();
  const dispatch = useDispatch();
  const [recordCategories, setRecordCategories] = useState<string[]>();

  const handleRecordDateConversion = (recordDate?: string): Date => {
    const date = new Date(recordDate || '');
    if (!date || !date.valueOf()) {
      return new Date();
    }

    return new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
    );
  };

  const getRecordsCategories = async (isIncome: boolean) => {
    const response = await getRequest<RecordCategoryResponse>(
      TextUtil.formatString(ApiRoutes.getRecordCategories, [String(isIncome)]),
    );

    const categoryNames = response.categories.map(category => category.name);
    setRecordCategories(categoryNames);
  };

  const onSaveRecordPress = async (record: Record, recordId?: number) => {
    if (!!recordId) {
      // const updateRecordRoute = TextUtil.formatString(ApiRoutes.updateRecord, [
      //   String(recordId),
      // ]);
      //
      // await putRequest(updateRecordRoute, record);
      dispatch(updateRecord({record, recordId: String(recordId)}));
    } else {
      dispatch(saveRecord({record}));
    }
  };

  const onDeleteRecordPress = async (recordId: number) => {
    if (recordId) {
      dispatch(deleteRecordById({recordId: String(recordId)}));
    } else {
      const title = 'Error';
      const msg = 'Could not delete record.';
      Alert.alert(title, msg);
    }
  };

  useEffect(() => {
    if (props?.isRecordIncome !== undefined) {
      (() => getRecordsCategories(props?.isRecordIncome))();
    }
  }, [props?.isRecordIncome]);

  return {
    categories: recordCategories,
    deleteRecord: onDeleteRecordPress,
    handleRecordDateConversion,
    saveRecord: onSaveRecordPress,
  };
};

export default useRecords;
