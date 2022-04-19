import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  description?: string;
  error?: boolean;
  errorMsg?: string;
};

export default function FormField({
  label,
  description,
  error,
  errorMsg,
  className,
  ...rest
}: Props) {
  return (
    <div className={className}>
      {!!label && (
        <div className="mb-4 text-sm">
          <p className="font-bold capitalize tracking-tight text-navy-light">{label}</p>
          {description && <p className="text-gray-dark">{description}</p>}
        </div>
      )}

      <input
        className={clsx(
          'min-w-[16rem] rounded-md border bg-gray px-6 py-3 text-body2 font-normal outline-none focus:border-blue sm:text-sm',
          error ? 'border-red' : 'border-gray',
        )}
        aria-invalid={error}
        {...rest}
      />

      {error && errorMsg && <p className="mt-1 text-sm text-red">{errorMsg}</p>}
    </div>
  );
}
