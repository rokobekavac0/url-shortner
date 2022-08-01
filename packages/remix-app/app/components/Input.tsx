import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
  placeholder?: string;
  type?: HTMLInputElement['type'];
  description?: string;
}

export const Input = ({
  label,
  name,
  description,
  error,
  ...props
}: InputProps) => {
  const desStyle = classNames(
    {
      'text-[#737373]': !error,
      'text-[#EF4444]': error,
    },
    'text-sm leading-4',
  );

  const inputStyle = classNames({
    'border-[#404040]': !error,
    'border-[#DC2626]': error,
  });

  return (
    <div className={`flex w-full flex-col gap-2`}>
      {label && (
        <label
          htmlFor={name}
          className={`text-base font-medium leading-5 text-white text-opacity-80`}
        >
          {label}
        </label>
      )}
      <input
        className={`${inputStyle} h-10 w-full rounded-2xl border bg-[#171717] bg-opacity-10 px-3 text-sm placeholder-[#525252] shadow-[0px_0px_1px_2px_rgba(255,255,255,0)] backdrop-blur-sm transition-all  focus:shadow-[0px_0px_1px_2px_rgba(255,255,255,0.69)]  focus:outline-none`}
        name={name}
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
        {...props}
      />
      {description && error && <div className={desStyle}>{error}</div>}
      {description && !error && <div className={desStyle}>{description}</div>}
    </div>
  );
};
