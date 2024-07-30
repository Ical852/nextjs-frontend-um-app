import React from 'react';
import Loading from 'react-loading';

interface MainButtonProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean | undefined;
  loading?: Boolean;
}
const MainButton = (props: MainButtonProps) => {
  const { title, disabled, onClick, loading } = props;

  return (
    <button
      disabled={disabled ?? false}
      onClick={onClick}
      type="button"
      className={
        "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      }>
      {loading && (
        <Loading type='spin' color='white' width={24} height={24} className='mr-3' />
      )}
      {title}
    </button>
  )
}

export default MainButton