import { Menu, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { Fragment, ReactNode } from 'react';

type Props = {
  label: ReactNode;
  selected: string;
  options: Array<{ label: string; value: string }>;
  onSelected?: (value: string) => void;
};

export default function Dropdown({ options, label, selected, onSelected }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border bg-navy py-6 px-4 text-sm text-gray-light focus:outline-none focus:ring-2 focus:ring-navy">
          {({ open }) => (
            <>
              {label}
              <ChevronDownIcon
                className={clsx('-mr-1 ml-2 h-5 w-5 transition-transform', open && 'rotate-180')}
                aria-hidden="true"
              />
            </>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-64 origin-top-right divide-y divide-navy/20 rounded-md border border-gray/80 bg-white text-body1 shadow-md focus:outline-none">
          {options.map(({ label: optionLabel, value }) => (
            <button
              key={value}
              className="w-full py-1 text-left"
              onClick={() => onSelected?.(value)}
            >
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={clsx(
                      'flex items-center justify-between px-6 py-3',
                      active ? 'text-pink' : 'text-gray-dark',
                    )}
                  >
                    {optionLabel}
                    {selected === value && <CheckIcon className="h-4 w-4 text-pink" />}
                  </div>
                )}
              </Menu.Item>
            </button>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
