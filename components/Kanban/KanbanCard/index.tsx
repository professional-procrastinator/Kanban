import {
  Avatar,
  Avatars,
  Container,
  ContainerDescription,
  ContainerTitle,
  ContainerTopic,
  DetailsContainer,
  PlanningChip,
  ResearchChip,
  UIChip,
  ActionsContainer,
  ActionsLeft,
  ActionsRight,
  Separator,
  Action,
} from './styles';

import Image from 'next/image';
import Comment from '../../../public/icons/comment.svg';
import Check from '../../../public/icons/check.svg';
import Link from '../../../public/icons/link2.svg';
import Calendar from '../../../public/icons/calendar.svg';

export default function KanbanCard({ data }: CardData) {
  return (
    <Container>
      <ContainerTopic>{data.topic}</ContainerTopic>
      <ContainerTitle>{data.title}</ContainerTitle>
      <ContainerDescription>{data.description}</ContainerDescription>

      {data.banner && (
        <Image src={data.banner} alt="Banner" layout={'responsive'} />
      )}

      <DetailsContainer>
        {data.category === 'Research' && (
          <ResearchChip>{data.category}</ResearchChip>
        )}
        {data.category === 'UI Design' && <UIChip>{data.category}</UIChip>}
        {data.category === 'Planning' && (
          <PlanningChip>{data.category}</PlanningChip>
        )}
        <Avatars>
          {data.useravatars.map((avatar, index) => {
            return (
              <Avatar key={index}>
                <Image width={32} height={32} src={avatar} alt={'ok'}></Image>
              </Avatar>
            );
          })}
        </Avatars>
      </DetailsContainer>

      <Separator />

      <ActionsContainer>
        <ActionsLeft>
          <Action>
            <Image src={Comment} alt="Comment" />
            <span>{data.comments}</span>
          </Action>

          {data.testsPassed && (
            <Action>
              <Image src={Check} alt="Test" />
              <span>{data.testsPassed}</span>
            </Action>
          )}

          {data.links && (
            <Action>
              <Image src={Link} alt="Link" />
              <span>{data.links}</span>
            </Action>
          )}
        </ActionsLeft>

        <ActionsRight>
          <Action>
            <Image src={Calendar} alt="Date" />
            <span
              style={{
                marginTop: '2px',
              }}
            >
              {data.date}
            </span>
          </Action>
        </ActionsRight>
      </ActionsContainer>
    </Container>
  );
}

interface CardData {
  data: {
    topic: string;
    title: string;
    description?: string;
    category: string;
    useravatars: any[];
    banner?: any;
    date?: string;
    comments: number;
    testsPassed?: string;
    links?: number;
  };
}
