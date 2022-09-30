import {
  Avatars,
  Container,
  ContainerDescription,
  ContainerTitle,
  ContainerTopic,
  DetailsContainer,
  ResearchChip,
} from './styles';

import Image from 'next/image';

export default function KanbanCard({ data }: CardData) {
  return (
    <Container>
      <ContainerTopic>{data.topic}</ContainerTopic>
      <ContainerTitle>{data.title}</ContainerTitle>
      <ContainerDescription>{data.description}</ContainerDescription>

      <DetailsContainer>
        <ResearchChip>Research</ResearchChip>
        <Avatars>
          {data.useravatars.map((avatar, index) => {
            return (
              <Image
                width={32}
                height={32}
                src={avatar}
                key={index}
                alt={'ok'}
              ></Image>
            );
          })}
        </Avatars>
      </DetailsContainer>
    </Container>
  );
}

interface CardData {
  data: {
    topic: string;
    title: string;
    description: string;
    category: string;
    useravatars: any[];
    date: string;
    comments: number;
  };
}
