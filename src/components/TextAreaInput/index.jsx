import { Input } from 'antd';

const { TextArea } = Input;
export default function TextAreaInput({ options }) {
  return <TextArea placeholder={options.placeholder} maxLength={options.max} />;
}
