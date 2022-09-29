import { useState } from 'react';
import {
  Container,
  SidebarHeader,
  SidebarBanner,
  SidebarLevel,
  SidebarLevelTitle,
  SidebarLevelTitleLevel,
  SidebarLevelTitleLevelNumber,
  SidebarLevelProgress,
  Links,
  LinkHeader,
  Separator,
  LinkHeaderDetails,
  LinkHeaderIcon,
} from './styles';
import Image from 'next/image';

import DimensionBanner from '../../public/DimensionBanner.png';
import Shield from '../../public/icons/shield.svg';
import People from '../../public/icons/people.svg';
import Arrow_down from '../../public/icons/down.svg';

export default function SidebarLinks() {
  return (
    <Container>
      <SidebarHeader>Bun</SidebarHeader>

      <SidebarBanner>
        <Image src={DimensionBanner} alt={'banner'}></Image>
      </SidebarBanner>

      <SidebarLevel>
        <SidebarLevelTitle>
          <SidebarLevelTitleLevel>
            <Image src={Shield} />
            <div>Level 1</div>
          </SidebarLevelTitleLevel>
          <SidebarLevelTitleLevelNumber>40%</SidebarLevelTitleLevelNumber>
        </SidebarLevelTitle>

        <SidebarLevelProgress />
      </SidebarLevel>

      <Separator />

      <Links>
        <LinkHeader>
          <LinkHeaderDetails>
            <Image src={People} />
            <span>Community</span>
          </LinkHeaderDetails>

          <LinkHeaderIcon>
            <Image src={Arrow_down} />
          </LinkHeaderIcon>
        </LinkHeader>
      </Links>
    </Container>
  );
}
