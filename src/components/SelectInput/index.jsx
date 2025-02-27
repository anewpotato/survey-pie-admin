import { Radio, Space } from 'antd';

export default function SelectInput({ options }) {
  console.log(options);
  return (
    <Space direction="vertical">
      {options.items.map((item, index) => (
        <Radio key={index}>{item}</Radio>
      ))}
    </Space>
  );
}
