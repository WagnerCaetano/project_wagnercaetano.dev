'use client';

import { colorTagMap } from '@/constants/color';
import { Tag } from '@/constants/types';
import { generateKey } from '@/services/keyHelper.service';
import { FunctionComponent, useEffect, useState } from 'react';

type ExperienceListProps = {
  tagColored: Tag;
};

export const DinamicColoredTag: FunctionComponent<ExperienceListProps> = ({ tagColored }) => {
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    setColor(colorTagMap[tagColored.name]);
  }, [tagColored]);

  return <span className={`${color} font-bold rounded-lg px-2 py-1 text-xs`}>{tagColored.name}</span>;
};

export default DinamicColoredTag;
