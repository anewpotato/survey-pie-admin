import { Table } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import MainLayout from '../layouts/MainLayout';
import fetcher from '../lib/fetcher';

const columns = [
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

      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    },
  },
  {
    title: '액션',
    dataIndex: 'id',
    key: 'action',
    render: (id) => {
      return <button onClick={() => console.log(id)}>삭제</button>;
    },
  },
];

const PAGE_SIZE = 20;

export default function ListPage() {
  const { data, error } = useSWR('/surveys', fetcher);

  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  if (error) return 'error';

  if (!data) return <div>loading...</div>;
  return (
    <MainLayout selectedKeys={['list']}>
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
