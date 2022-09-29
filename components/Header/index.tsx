import {
  Container,
  ContainerPath,
  LayoutIcon,
  RightControls,
  SearchBar,
  SearchBarInput,
} from './style';
import Search from '../../public/icons/search.svg';
import Image from 'next/image';

export default function Header() {
  return (
    <Container>
      <ContainerPath>
        <span>Projects</span>
        <span>
          <svg
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.26398 7.104L0.815979 6.656L3.47198 4L0.815979 1.344L1.26398 0.896L4.36798 4L1.26398 7.104Z"
              fill="#6C6F75"
            />
          </svg>
        </span>
        <span>Cloud Platform</span>
        <span>FLYTE</span>
      </ContainerPath>

      <RightControls>
        <SearchBar>
          <Image src={Search} alt={'search'} />

          <SearchBarInput placeholder="Search" />
        </SearchBar>

        <LayoutIcon>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H14C14.5304 14 15.0391 13.7893 15.4142 13.4142C15.7893 13.0391 16 12.5304 16 12V2ZM11 1V13H2C1.73478 13 1.48043 12.8946 1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H11ZM12 1H14C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V12C15 12.2652 14.8946 12.5196 14.7071 12.7071C14.5196 12.8946 14.2652 13 14 13H12V1Z"
              fill="#5C6066"
            />
          </svg>
        </LayoutIcon>
      </RightControls>
    </Container>
  );
}
