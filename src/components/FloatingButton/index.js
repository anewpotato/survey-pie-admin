import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import postSurvey from '../../services/postSurvey';
import putSurvey from '../../services/putSurvey';

export default function FloatingButton() {
  const survey = useSelector((state) => state.survey.data);

  const isEditPage = !!survey?.id;

  const navigate = useNavigate();
  return (
    <FloatingButtonWrapper>
      <Button
        onClick={() =>
          (isEditPage ? putSurvey(survey) : postSurvey(survey)).then((res) => {
            navigate(`/builder/${res.data.id}`);
          })
        }
      >
        저장
      </Button>
    </FloatingButtonWrapper>
  );
}

const FloatingButtonWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  box-shadow: 2px 2px 5px -2px #cacaca;
`;
