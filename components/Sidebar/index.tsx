import { useState } from 'react';
import {
  SidebarStyles,
  DimensionIcon,
  Separator,
  AppIcon,
  ActiveAppIcon,
  Active,
  Indicator,
  AddIcon,
} from './styles';
import Image from 'next/image';

import Dimension from '../../public/icons/dimension.svg';
import Appcircle from '../../public/icons/appcircle.svg';
import Atlassian from '../../public/icons/atlassian.svg';
import Dribbble from '../../public/icons/dribbble.png';
import Buymeacoffee from '../../public/icons/buymeacoffee.svg';
import Add from '../../public/icons/add.svg';

export default function Sidebar() {
  return (
    <SidebarStyles>
      <DimensionIcon>
        <Image src={Dimension} alt="Dimension Icon" />
      </DimensionIcon>
      <Separator />
      <Active>
        <Indicator />
        <ActiveAppIcon>
          <Image src={Appcircle} alt="Appcircle Icon" />
        </ActiveAppIcon>
      </Active>
      <AppIcon>
        <Image src={Dribbble} alt="Appcircle Icon" width={27} height={27} />
      </AppIcon>
      <AppIcon>
        <Image src={Buymeacoffee} alt="Appcircle Icon" />
      </AppIcon>
      <AppIcon>
        <Image src={Atlassian} alt="Appcircle Icon" />
      </AppIcon>
      <AddIcon>
        <Image src={Add} alt="Add" />
      </AddIcon>
    </SidebarStyles>
  );
}
