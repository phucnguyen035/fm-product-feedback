import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';

import SectionRoadmap from './SectionRoadmap';
import SectionTags from './SectionTags';
import WrapperGradient from './WrapperGradient';

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-[var(--header-height)] md:hidden">
      <WrapperGradient className="flex items-center justify-between px-6 py-4">
        <div className="capitalize">
          <h1 className="text-body2 font-bold text-white">Frontend Mentor</h1>
          <span className="block text-body3 font-medium text-white/75">Feedback Board</span>
        </div>

        <div>
          <button
            aria-label={open ? 'Close icon' : 'Menu icon'}
            className="h-6 w-6 text-white"
            onClick={() => setOpen((val) => !val)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </WrapperGradient>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 top-18 overflow-hidden" onClose={setOpen}>
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-black/50 transition-opacity" />
            </Transition.Child>

            <div className="pointer-events-none fixed top-18 bottom-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <nav className="pointer-events-auto w-[270px]">
                  <div className="flex h-full flex-col space-y-6 overflow-y-scroll bg-gray-light p-6">
                    <SectionTags />
                    <SectionRoadmap />
                  </div>
                </nav>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
