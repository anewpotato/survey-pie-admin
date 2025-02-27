import { configureStore } from '@reduxjs/toolkit';

import thunk from './middleware/thunk';
import setSelectedQuestionIdReducer from './selectedQuestionId/selectedQuestionIdSlice';
import surveyReducer from './survey/surveySlice';

export default configureStore({
  reducer: {
    survey: surveyReducer,
    selectedQuestionId: setSelectedQuestionIdReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
