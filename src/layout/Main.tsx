import { ReactNode } from 'react';

import SuggestionIcon from '@/assets/suggestions/icon-suggestions.svg';
import { ButtonAddFeedback } from '@/components/ButtonAddFeedback';
import { Dropdown } from '@/components/Dropdown';
import { Footer } from '@/components/Footer';
import { HeaderMobile } from '@/components/HeaderMobile';
import SectionRoadmap from '@/components/SectionRoadmap';
import { SectionTags } from '@/components/SectionTags';
import { WrapperGradient } from '@/components/WrapperGradient';
import { useSortOptions } from '@/hooks/useSortOptions';

type Props = {
  meta: ReactNode;
  children: ReactNode;
};

export default function Main({ meta, children }: Props) {
  const { currentOption, currentLabel, options, setSortOption } = useSortOptions();

  return (
    <div className="grid min-h-screen w-full grid-rows-[min-content_auto] bg-gray-light antialiased md:block">
      {meta}

      <HeaderMobile />

      <div className="grid h-[calc(100vh-var(--header-height))] grid-rows-[min-content_auto_min-content] md:h-full md:min-h-screen md:grid-rows-[178px_min-content_auto_min-content] md:px-6 md:pt-14 lg:grid-cols-[255px_auto] lg:grid-rows-[min-content_auto_min-content_min-content] lg:gap-x-8">
        <section className="hidden md:mb-10 md:grid md:grid-cols-3 md:gap-2.5 lg:row-span-full lg:mb-0 lg:grid-cols-none lg:grid-rows-[repeat(3,max-content)]">
          <WrapperGradient className="h-full rounded-xl p-6 lg:h-[137px]">
            <div className="relative h-full">
              <div className="absolute bottom-0 capitalize">
                <h1 className="text-h2 font-bold text-white">Frontend Mentor</h1>
                <span className="block text-body2 font-medium text-white/75">Feedback board</span>
              </div>
            </div>
          </WrapperGradient>
          <SectionTags />
          <SectionRoadmap />
        </section>

        <div className="flex items-center justify-between bg-navy pr-6 md:rounded-xl md:pl-6 md:pr-4">
          <div className="flex">
            <div className="hidden md:mr-10 md:flex md:items-center">
              <SuggestionIcon />
              <span className="ml-4 text-h3  font-bold text-white">0 Suggestions</span>
            </div>

            <Dropdown
              label={
                <>
                  Sort by: &nbsp;<strong> {currentLabel}</strong>
                </>
              }
              selected={currentOption}
              options={options}
              onSelected={setSortOption}
            />
          </div>

          <div>
            <ButtonAddFeedback />
          </div>
        </div>

        <main className="mt-8 px-6 md:mt-6 md:px-0 lg:row-span-2">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
