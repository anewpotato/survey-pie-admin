import { Button, Table } from 'antd';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSWR from 'swr';

import MainLayout from '../layouts/MainLayout';
import fetcher from '../lib/fetcher';
import deleteSurvey from '../services/deleteSurvey';

const PAGE_SIZE = 20;

export default function ListPage() {
  const { data, error, mutate } = useSWR(
    '/surveys?_sort=id&_order=desc',
    fetcher,
  );

  const [page, setPage] = useState(1);

  const columns = useMemo(
    () => [
      {
        title: '번호',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '제목',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '생성일',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (createdAt) => {
          const time = new Date(createdAt);

          return `${time.getFullYear()}-${
            time.getMonth() + 1
          }-${time.getDate()}`;
        },
      },
      {
        title: '액션',
        dataIndex: 'id',
        key: 'action',
        render: (id) => {
          return (
            <Button
              danger
              onClick={(e) => {
                deleteSurvey(id).then(() => mutate());

                e.preventDefault();
                e.stopPropagation();
              }}
            >
              삭제
            </Button>
          );
        },
      },
    ],
    [mutate],
  );

  const navigate = useNavigate();

  if (error) return 'error';

  if (!data) return <div>loading...</div>;
  return (
    <MainLayout selectedKeys={['list']}>
      <CreateButtonWrapper>
        <Button onClick={() => navigate('/builder')}>
          새로운 설문조사 생성
        </Button>
      </CreateButtonWrapper>
      <Table
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`/builder/${record.id}`);
            },
          };
        }}
        onChange={(pagination) => {
          setPage(pagination.current);
        }}
        columns={columns}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
        pagination={{ total: data.length, current: page, pageSize: PAGE_SIZE }}
      />
    </MainLayout>
  );
}

const CreateButtonWrapper = styled.div`
  text-align: right;
  margin-bottom: 25px;
`;
