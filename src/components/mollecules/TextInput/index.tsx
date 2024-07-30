import React from 'react';

interface TextinputProps {
  title: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string | undefined;
}
const TextInput = (props: TextinputProps) => {
  const { title, type, value, onChange, placeholder } = props;

  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">{title}</label>
      <div className="mt-2">
        <input
          type={type ?? 'text'}
          className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={value}
          onChange={onChange}
          placeholder={placeholder ?? ''}
        />
      </div>
    </div>
  )
}

export default TextInput