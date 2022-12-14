import { useState } from 'react';
import {
  Container,
  Button,
  LeftContainer,
  RightContainer,
  Avatars,
  PaddingButton,
  ButtonSeparator,
  SwitchButton,
  ModeContainer,
  ActiveModeContainer,
  ShareButton,
} from './styles';
import Image from 'next/image';

import Av1 from '../../public/avatars/1.svg';
import Av2 from '../../public/avatars/2.svg';

import List from '../../public/icons/list.svg';
import Grid from '../../public/icons/grid.svg';
import Headphones from '../../public/icons/headphones.svg';
import Link from '../../public/icons/link.svg';

export default function Statusbar() {
  const [mode, setMode] = useState(0);

  return (
    <Container>
      <LeftContainer>
        <Button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.77547 6.33775C3.06613 6.51624 2.44638 6.94762 2.03266 7.55083C1.61894 8.15404 1.43973 8.88757 1.5287 9.61359C1.61767 10.3396 1.96869 11.0082 2.51582 11.4936C3.06295 11.9791 3.76852 12.2481 4.49997 12.25H12.75C13.2795 12.2496 13.8029 12.1371 14.2859 11.9199C14.7688 11.7027 15.2002 11.3856 15.5518 10.9896C15.9033 10.5936 16.167 10.1277 16.3255 9.6224C16.484 9.11714 16.5337 8.58405 16.4713 8.05821C16.4089 7.53237 16.2359 7.0257 15.9636 6.57155C15.6913 6.11741 15.3258 5.72609 14.8914 5.42334C14.457 5.12059 13.9633 4.91329 13.443 4.81507C12.9226 4.71685 12.3874 4.72995 11.8725 4.8535L10.875 5.125"
              fill="#58B2CB"
            />
            <path
              d="M3.77547 6.33775C3.06613 6.51624 2.44638 6.94762 2.03266 7.55083C1.61894 8.15404 1.43973 8.88757 1.5287 9.61359C1.61767 10.3396 1.96869 11.0082 2.51582 11.4936C3.06295 11.9791 3.76852 12.2481 4.49997 12.25H12.75C13.2795 12.2496 13.803 12.1371 14.2859 11.9199C14.7688 11.7027 15.2002 11.3856 15.5518 10.9896C15.9033 10.5936 16.167 10.1277 16.3255 9.6224C16.484 9.11714 16.5337 8.58405 16.4713 8.05821C16.4089 7.53237 16.2359 7.0257 15.9636 6.57155C15.6913 6.11741 15.3258 5.72609 14.8914 5.42334C14.4569 5.12059 13.9633 4.91329 13.443 4.81507C12.9226 4.71685 12.3874 4.72995 11.8725 4.8535L10.875 5.125"
              stroke="#58B2CB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.8725 4.8535C11.6162 3.83843 10.9834 2.95881 10.1026 2.39295C9.22175 1.82708 8.1587 1.61732 7.12894 1.80618C6.09918 1.99504 5.17975 2.56839 4.55704 3.41001C3.93434 4.25162 3.65494 5.29853 3.7755 6.3385C3.7755 6.3385 3.89025 7 4.125 7.375"
              fill="#58B2CB"
            />
            <path
              d="M11.8725 4.8535C11.6162 3.83843 10.9834 2.95881 10.1026 2.39295C9.22175 1.82708 8.1587 1.61732 7.12894 1.80618C6.09918 1.99504 5.17975 2.56839 4.55704 3.41001C3.93434 4.25162 3.65494 5.29853 3.7755 6.3385C3.7755 6.3385 3.89025 7 4.125 7.375"
              stroke="#58B2CB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>25%</span>
        </Button>

        <PaddingButton>Filter</PaddingButton>
      </LeftContainer>

      <RightContainer>
        <Avatars>
          <Image src={Av1} alt="Avatar 1" />
          <Image src={Av2} alt="Avatar 2" />
        </Avatars>

        <SwitchButton>
          {mode == 0 ? (
            <ActiveModeContainer>
              <Image src={List} alt="List" />
            </ActiveModeContainer>
          ) : (
            <ModeContainer onClick={() => setMode(0)}>
              <Image src={List} alt="List" />
            </ModeContainer>
          )}
          <ButtonSeparator />
          {mode == 1 ? (
            <ActiveModeContainer>
              <Image src={Grid} alt="Grid" />
            </ActiveModeContainer>
          ) : (
            <ModeContainer onClick={() => setMode(1)}>
              <Image src={Grid} alt="Grid" />
            </ModeContainer>
          )}
        </SwitchButton>

        <PaddingButton>
          <Image
            style={{
              marginLeft: '-1px',
            }}
            src={Headphones}
            alt="Headphones"
          />
        </PaddingButton>

        <ShareButton>
          <Image src={Link} alt="Link" />
          <span>Share</span>
        </ShareButton>
      </RightContainer>
    </Container>
  );
}
