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
import { useState, useEffect } from 'react';
import Done from '../../../public/icons/done.svg';

export default function KanbanCard({ data }: CardData) {
  const [doesHaveDescription, setDoesHaveDescription] = useState(false);
  const [doesHaveBanner, setDoesHaveBanner] = useState(false);

  useEffect(() => {
    if (data.description) {
      setDoesHaveDescription(true);
    }

    if (data.banner) {
      setDoesHaveBanner(true);
    }
  }, []);

  return (
    <Container>
      <ContainerTopic>{data.topic}</ContainerTopic>
      <ContainerTitle>{data.title}</ContainerTitle>
      <ContainerDescription>{data.description}</ContainerDescription>

      {data.banner && (
        <Image
          draggable={false}
          src={data.banner}
          alt="Banner"
          layout={'responsive'}
        />
      )}

      {!doesHaveBanner && !doesHaveDescription ? (
        <DetailsContainer
          style={{
            marginTop: '5px',
          }}
        >
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
                  <Image
                    draggable={false}
                    width={32}
                    height={32}
                    src={avatar}
                    alt={'ok'}
                  ></Image>
                </Avatar>
              );
            })}
          </Avatars>
        </DetailsContainer>
      ) : (
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
                  <Image
                    draggable={false}
                    width={32}
                    height={32}
                    src={avatar}
                    alt={'ok'}
                  ></Image>
                </Avatar>
              );
            })}
          </Avatars>
        </DetailsContainer>
      )}

      <Separator />

      <ActionsContainer>
        <ActionsLeft>
          <Action>
            <Image draggable={false} src={Comment} alt="Comment" />
            <span>{data.comments}</span>
          </Action>

          {data.testsPassed && (
            <Action>
              <Image draggable={false} src={Check} alt="Test" />
              <span>{data.testsPassed}</span>
            </Action>
          )}

          {data.links && (
            <Action>
              <Image draggable={false} src={Link} alt="Link" />
              <span>{data.links}</span>
            </Action>
          )}
        </ActionsLeft>

        <ActionsRight>
          {data.date == 'Done' ? (
            <Action>
              <Image draggable={false} src={Done} alt="Done" />
              <span
                style={{
                  marginTop: '2.4px',
                  color: '#78C552',
                  fontWeight: 'bold',
                  fontSize: '14.5px',
                }}
              >
                Done
              </span>
            </Action>
          ) : (
            <Action>
              <Image draggable={false} src={Calendar} alt="Date" />
              <span
                style={{
                  marginTop: '2px',
                }}
              >
                {data.date}
              </span>
            </Action>
          )}
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
