'use client';

import { colorTagMap } from '@/constants/color';
import { Tag } from '@/constants/types';
import { generateKey } from '@/services/keyHelper.service';
import { FunctionComponent, useEffect, useState } from 'react';

type ExperienceListProps = {
  tag: Tag;
};

export const DinamicColoredTag: FunctionComponent<ExperienceListProps> = ({ tag }) => {
  const [color, setColor] = useState<string>('');
  const key = generateKey(tag);

  useEffect(() => {
    setColor(colorTagMap[tag.name]);
  }, [tag]);

  return (
    <span key={key} className={`${color} font-bold rounded-lg px-2 py-1 text-xs`}>
      {tag.name}
    </span>
  );
};

export default DinamicColoredTag;
