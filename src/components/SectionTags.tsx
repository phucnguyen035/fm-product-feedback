import { useState } from 'react';

import Tag from './Tag';
import Wrapper from './Wrapper';

const mock = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

export default function SectionTags() {
  const [selected, setSelected] = useState('All');

  return (
    <Wrapper>
      <ul className="flex flex-wrap gap-x-2 gap-y-3.5">
        {mock.map((tag) => (
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
