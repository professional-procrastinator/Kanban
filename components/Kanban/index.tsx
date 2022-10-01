import { useState } from 'react';
import KanbanCard from './KanbanCard';
import {
  Column,
  ColumnBody,
  ColumnHeader,
  ColumnHeaderLeft,
  ColumnHeaderRight,
  CompletedSeparator,
  Container,
  ProgressSeparator,
  ToDoSeparator,
} from './styles';

import Av3 from '../../public/avatars/3.svg';
import Av4 from '../../public/avatars/4.svg';
import Av5 from '../../public/avatars/5.svg';
import Av6 from '../../public/avatars/6.svg';
import Av7 from '../../public/avatars/7.svg';
import Av8 from '../../public/avatars/8.svg';
import ThreeMore from '../../public/avatars/3+.svg';

import Image from 'next/image';

import Todo from '../../public/icons/circle.svg';
import Progress from '../../public/icons/progress.svg';
import Completed from '../../public/icons/completed.svg';

import Add from '../../public/icons/addgrey.svg';
import Details from '../../public/icons/details.svg';

import MoodboardBanner from '../../public/MoodboardBanner.svg';
import DashboardBanner from '../../public/DashboardBanner.svg';

export default function Kanban() {
  const [ToDoData, setToDoData] = useState([
    {
      topic: 'FLYTE-1',
      title: 'UX Adjustments',
      description:
        'Make UI/UX revisions for the project management dashboard on Figma.',
      category: 'Research',
      useravatars: [Av3, Av4],
      date: 'Oct 27',
      comments: 3,
    },
    {
      topic: 'FLYTE-2',
      title: 'Moodboards',
      category: 'UI Design',
      useravatars: [Av5, Av6],
      banner: MoodboardBanner,
      comments: 2,
      links: 1,
      date: 'Nov 23',
    },
  ]);

  const [ProgressData, setProgressData] = useState([
    {
      topic: 'FLYTE-3',
      title: 'Dashboard Design',
      category: 'UI Design',
      useravatars: [Av5, Av7, Av6],
      date: 'Jun 20',
      comments: 2,
      testsPassed: '4/8',
      links: 1,
      banner: DashboardBanner,
    },
    {
      topic: 'FLYTE-4',
      title: 'Design System',
      description: 'Create a consistent look and feel both on web and mobile.',
      category: 'UI Design',
      useravatars: [Av5, Av7, Av6, ThreeMore],
      comments: 12,
      testsPassed: '4/8',
      date: 'May 20',
    },
  ]);

  const [CompletedData, setCompletedData] = useState([
    {
      topic: 'Mumbai sux',
      title: 'Mumbai sux',
      description: 'Mumbai sux',
      category: 'Mumbai sux',
      useravatars: [],
      date: 'Mumbai sux',
      comments: 2,
    },
    {
      topic: 'Pakistan sux',
      title: 'Pakistan sux',
      description: 'Pakistan sux',
      category: 'Pakistan sux',
      useravatars: [],
      date: 'Pakistan sux',
      comments: 2,
    },
  ]);

  return (
    <Container>
      <Column>
        <ColumnHeader>
          <ColumnHeaderLeft>
            <Image src={Todo} alt="Todo" />
            <span>TODO</span>
            <span>{ToDoData.length}</span>
          </ColumnHeaderLeft>

          <ColumnHeaderRight>
            <Image src={Add} alt="Add" />
            <Image src={Details} alt="Details" />
          </ColumnHeaderRight>
        </ColumnHeader>

        <ToDoSeparator />

        <ColumnBody>
          {ToDoData.map((data, index) => {
            return <KanbanCard data={data} key={index} />;
          })}
        </ColumnBody>
      </Column>

      <Column>
        <ColumnHeader>
          <ColumnHeaderLeft>
            <Image src={Progress} alt="Progress" />
            <span>IN PROGRESS</span>
            <span>{ProgressData.length}</span>
          </ColumnHeaderLeft>

          <ColumnHeaderRight>
            <Image src={Add} alt="Add" />
            <Image src={Details} alt="Details" />
          </ColumnHeaderRight>
        </ColumnHeader>

        <ProgressSeparator />

        <ColumnBody>
          {ProgressData.map((data, index) => {
            return <KanbanCard data={data} key={index} />;
          })}
        </ColumnBody>
      </Column>

      <Column>
        <ColumnHeader>
          <ColumnHeaderLeft>
            <Image src={Completed} alt="Completed" />
            <span>COMPLETED</span>
            <span>{CompletedData.length}</span>
          </ColumnHeaderLeft>

          <ColumnHeaderRight>
            <Image src={Add} alt="Add" />
            <Image src={Details} alt="Details" />
          </ColumnHeaderRight>
        </ColumnHeader>

        <CompletedSeparator />

        <ColumnBody>
          {CompletedData.map((data, index) => {
            return <KanbanCard data={data} key={index} />;
          })}
        </ColumnBody>
      </Column>
    </Container>
  );
}
