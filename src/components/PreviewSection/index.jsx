import { useDispatch, useSelector } from 'react-redux';

import { setSelectedQuestionId } from '../../stores/selectedQuestionId/selectedQuestionIdSlice';
import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
} from '../../stores/survey/surveySlice';
import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

export default function PreviewSection() {
  const questions = useSelector((state) => state.survey.data?.questions || []);
  const selectedQuestionId = useSelector(
    (state) => state.selectedQuestionId.data,
  );
  const dispatch = useDispatch();

  const handleMoveUpQuestion = (index) => {
    if (index === 0) return;
    dispatch(moveUpQuestion(index));
  };
  const handleAddQuestion = (type) => {
    dispatch(addQuestion(type));
  };

  const handleMoveDownQuestion = (index) => {
    if (index === questions.length - 1) return;
    dispatch(moveDownQuestion(index));
  };
  const handleDeleteQuestion = (index) => {
    dispatch(deleteQuestion(index));
  };

  const handleCardClick = (index) => {
    dispatch(setSelectedQuestionId(index));
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={() => handleMoveUpQuestion(index)}
          onDownButtonClick={() => handleMoveDownQuestion(index)}
          onDeleteButtonClick={() => handleDeleteQuestion(index)}
          onClick={() => handleCardClick(index)}
          isSelected={index === selectedQuestionId}
        >
          <Body type={question.type} options={question.options} />
        </Card>
      ))}
      <AddButton addQuestion={handleAddQuestion} />
    </div>
  );
}
