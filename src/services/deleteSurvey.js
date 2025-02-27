import axios from 'axios';

export default function deleteSurvey(surveyId) {
  return axios.delete(`/surveys/${surveyId}`).then(() => {
    alert('삭제되었습니다.');
  });
}
