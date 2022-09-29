export default function KanbanCard({ data }: CardData) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

interface CardData {
  data: {
    topic: string;
    title: string;
    description: string;
    category: string;
    useravatars: string[];
    date: string;
    comments: number;
  };
}
