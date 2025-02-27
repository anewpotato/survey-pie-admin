import { DeleteOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';

export default function Card({
  children,
  title,
  desc,
  onUpButtonClick,
  onDownButtonClick,
  onDeleteButtonClick,
}) {
  return (
    <CardWrapper>
      <Head>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Head>
      <Body>{children}</Body>
      <ButtonGroupWrapper>
        <ButtonGroup>
          <Button type="text" onClick={onUpButtonClick} icon={<UpOutlined />} />
          <Button
            type="text"
            onClick={onDeleteButtonClick}
            icon={<DeleteOutlined />}
          />
          <Button
            type="text"
            onClick={onDownButtonClick}
            icon={<DownOutlined />}
          />
        </ButtonGroup>
      </ButtonGroupWrapper>
    </CardWrapper>
  );
}
const ButtonGroupWrapper = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  display: none;
`;
const ButtonGroup = styled.div`
  background: #ffffff;
  margin-left: 10px;
  border: 1px solid #ddddd;
  border-radius: 5px;
`;

const CardWrapper = styled.div`
  border: 1px solid #dddddd;
  width: 400px;
  margin: 30px auto;
  background: #ffffff;
  position: relative;

  &:hover ${ButtonGroupWrapper} {
    display: block;
  }
`;

const Head = styled.div`
  border-bottom: 1px solid #dddddd;
  padding: 15px;
`;
const Title = styled.div`
  font-weight: 600;
`;
const Desc = styled.div`
  color: #666666;
  margin-left: 15px;
`;

const Body = styled.div`
  padding: 5px;
`;
