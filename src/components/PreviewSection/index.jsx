import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

export default function PreviewSection({
  questions,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
}) {
  return (
    <div>
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={() => moveUpQuestion(index)}
          onDownButtonClick={() => moveDownQuestion(index)}
          onDeleteButtonClick={() => deleteQuestion(index)}
        >
          <Body type={question.type} options={question.options} />
        </Card>
      ))}
      <AddButton addQuestion={addQuestion} />
    </div>
  );
}
