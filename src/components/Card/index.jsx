import styled from 'styled-components';

export default function Card({ children, title, desc }) {
  return (
    <CardWrapper>
      <Head>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Head>
      <Body>{children}</Body>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border: 1px solid #dddddd;
  width: 400px;
  margin: 30px auto;
  background: #ffffff;
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
