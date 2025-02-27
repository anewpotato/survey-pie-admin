import { Input } from 'antd';

export default function TextInput({ options }) {
  return (
    <>
      <Input placeholder={options.placeholder} maxLength={options.max} />
    </>
  );
}
