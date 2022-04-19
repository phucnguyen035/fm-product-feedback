import clsx from 'clsx';
import { useCallback } from 'react';

import Wrapper from './Wrapper';

const roadmap = [
  { key: 'Planned', value: 2 },
  { key: 'In-progress', value: 3 },
  { key: 'Live', value: 1 },
];

export default function SectionRoadmap() {
  const getColor = useCallback(
    (item: { key: string; value: number }) => {
      switch (item.key) {
        case 'Planned':
          return 'text-orange';
        case 'In-progress':
          return 'text-pink';
        case 'Live':
          return 'text-blue';

        default:
          return '';
      }
    },
    [roadmap],
  );

  return (
    <Wrapper as="section">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-h3 font-bold text-navy">Roadmap</h2>
        <span className="text-body3 font-semibold text-blue underline">View</span>
      </div>

      <ul className="list-disc pl-4">
        {roadmap.map((item) => (
          <li key={item.key} className={clsx('w-full justify-between', getColor(item))}>
            <div className="flex justify-between text-body1 text-gray-dark">
              <span className="font-normal">{item.key}</span>
              <span className="font-semibold">{item.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
