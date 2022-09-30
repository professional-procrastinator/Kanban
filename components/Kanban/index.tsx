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

import Image from 'next/image';

import Todo from '../../public/icons/circle.svg';
import Progress from '../../public/icons/progress.svg';
import Completed from '../../public/icons/completed.svg';

import Add from '../../public/icons/addgrey.svg';
import Details from '../../public/icons/details.svg';

export default function Kanban() {
  const [ToDoData, setToDoData] = useState([
    {
      topic: 'FLYTE-1',
      title: 'UX Adjustments',
      description:
        'Make UI/UX revisions for the project management dashboard on Figma.',
      category: 'Research',
      useravatars: [Av3, Av4],
      date: 'Bihar sux',
      comments: 2,
    },
  ]);

  const [ProgressData, setProgressData] = useState([
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
