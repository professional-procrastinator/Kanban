import { useState } from 'react';
import KanbanCard from './KanbanCard';

export default function Kanban() {
  const [ToDoData, setToDoData] = useState([
    {
      topic: 'Bihar sux',
      title: 'Bihar sux',
      description: 'Bihar sux',
      category: 'Bihar sux',
      useravatars: [],
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '70px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {ToDoData.map((item, index) => (
          <KanbanCard key={index} data={item} />
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {ToDoData.map((item, index) => (
          <KanbanCard key={index} data={item} />
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {ToDoData.map((item, index) => (
          <KanbanCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
