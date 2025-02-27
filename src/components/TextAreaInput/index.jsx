import { Input } from 'antd';

const { TextArea } = Input;
export default function TextAreaInput({ options }) {
  console.log(options);
  return <TextArea placeholder={options.placeholder} maxLength={options.max} />;
}
