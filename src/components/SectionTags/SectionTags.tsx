import { useMemo, useState } from 'react';

import { Tag } from '../Tag';
import { Wrapper } from '../Wrapper';

const mock = ['UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

type Props = {
  tags?: string[];
};

export default function SectionTags({ tags = mock }: Props) {
  const tagsWithAll = useMemo(() => ['all', ...tags], [tags]);

  const [selected, setSelected] = useState('all');

  return (
    <Wrapper>
      <ul className="flex flex-wrap gap-x-2 gap-y-3.5">
        {tagsWithAll.map((tag) => (
          <li key={tag} className="capitalize">
            <Tag active={selected === tag} onClick={() => setSelected(tag)}>
              {tag}
            </Tag>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
