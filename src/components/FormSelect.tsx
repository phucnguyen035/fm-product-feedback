import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { Fragment, useMemo } from 'react';

type Props = {
  value: string;
  label?: string;
  description?: string;
  options: Array<{ label: string; value: string }>;
  onSelect: (value: string) => void;
};

export default function FormSelect({ value, label, options, description, onSelect }: Props) {
  const selectedLabel = useMemo(() => options.find((o) => o.value === value)?.label ?? '', []);

  return (
    <Listbox value={value} onChange={onSelect}>
      {({ open }) => (
        <>
          {label && (
            <Listbox.Label className="mb-4 block text-sm">
              <p className="font-bold capitalize tracking-tight text-navy-light">{label}</p>
              {description && <p className="text-gray-dark">{description}</p>}
            </Listbox.Label>
          )}

          <div className="relative inline-block min-w-[16rem]">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray bg-gray py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-blue sm:text-sm">
              <span className="block truncate">{selectedLabel}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-blue" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute top-0 max-h-60 w-full overflow-auto rounded-md border border-gray bg-white py-1 text-base shadow-lg">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    className={({ active }) =>
                      clsx(
                        'relative cursor-default select-none py-2 pl-8 pr-4',
                        active ? 'text-pink' : 'text-gray-dark',
                      )
                    }
                    value={option.value}
                  >
                    {({ selected }) => (
                      <div className="flex items-center justify-between">
                        <span className="block truncate">{option.label}</span>
                        {selected && <CheckIcon className="h-5 w-5 text-pink" aria-hidden="true" />}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
