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
  LinkBody,
  LinkBodyItem,
  LinkInactiveBodyItem,
  LinkInactiveHeaderDetails,
  LinkLastHeader,
} from './styles';
import Image from 'next/image';

import DimensionBanner from '../../public/DimensionBanner.png';
import Shield from '../../public/icons/shield.svg';
import People from '../../public/icons/people.svg';
import Arrow_down from '../../public/icons/down.svg';
import Profile from '../../public/icons/profile.svg';
import ProfileLight from '../../public/icons/profile-light.svg';
import CodeC from '../../public/icons/codec.svg';
import Arrow_right from '../../public/icons/right.svg';
import Cloud from '../../public/icons/cloud.svg';
import Team from '../../public/icons/team.svg';
import Domain from '../../public/icons/domain.svg';
import Analytics from '../../public/icons/analytics.svg';

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

        <LinkBody>
          <LinkBodyItem>
            <Image src={Profile} />
            <span>Profile</span>
          </LinkBodyItem>

          <LinkInactiveBodyItem>
            <Image src={ProfileLight} />
            <span>Issues</span>
          </LinkInactiveBodyItem>

          <LinkInactiveBodyItem>
            <Image src={ProfileLight} />
            <span>Pull Requests</span>
          </LinkInactiveBodyItem>

          <LinkInactiveBodyItem>
            <Image src={ProfileLight} />
            <span>Discussions</span>
          </LinkInactiveBodyItem>
        </LinkBody>

        <LinkHeader>
          <LinkInactiveHeaderDetails>
            <Image src={CodeC} />
            <span>Code</span>
          </LinkInactiveHeaderDetails>

          <LinkHeaderIcon>
            <Image src={Arrow_right} />
          </LinkHeaderIcon>
        </LinkHeader>

        <LinkHeader>
          <LinkInactiveHeaderDetails>
            <Image src={Cloud} />
            <span>Cloud</span>
          </LinkInactiveHeaderDetails>

          <LinkHeaderIcon>
            <Image src={Arrow_right} />
          </LinkHeaderIcon>
        </LinkHeader>

        <LinkHeader>
          <LinkInactiveHeaderDetails>
            <Image src={Team} />
            <span>Teams</span>
          </LinkInactiveHeaderDetails>

          <LinkHeaderIcon>
            <Image src={Arrow_right} />
          </LinkHeaderIcon>
        </LinkHeader>

        <LinkHeader>
          <LinkInactiveHeaderDetails>
            <Image src={Domain} />
            <span>Domains</span>
          </LinkInactiveHeaderDetails>

          <LinkHeaderIcon>
            <Image src={Arrow_right} />
          </LinkHeaderIcon>
        </LinkHeader>

        <LinkLastHeader>
          <LinkInactiveHeaderDetails>
            <Image src={Analytics} />
            <span>Analytics</span>
          </LinkInactiveHeaderDetails>

          <LinkHeaderIcon>
            <Image src={Arrow_right} />
          </LinkHeaderIcon>
        </LinkLastHeader>
      </Links>
    </Container>
  );
}
