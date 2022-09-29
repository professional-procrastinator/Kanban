import { useState } from 'react';
import {
  Container,
  SidebarHeader,
  SidebarBanner,
  SidebarLevel,
} from './styles';
import Image from 'next/image';

import DimensionBanner from '../../public/DimensionBanner.png';

export default function SidebarLinks() {
  return (
    <Container>
      <SidebarHeader>Bun</SidebarHeader>

      <SidebarBanner>
        <Image src={DimensionBanner} alt={'banner'}></Image>
      </SidebarBanner>

      <SidebarLevel />
    </Container>
  );
}
