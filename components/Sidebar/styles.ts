import { styled } from '../../stitches.config';

export const SidebarStyles = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '7%',
  minWidth: '60px',
  maxWidth: '70px',
  position: 'sticky',
  top: '0',
  left: '0',
  bottom: '0',
  borderRight: '1px solid $separator',
  backgroundColor: '$sidebar',
});

export const DimensionIcon = styled('div', {
  display: 'flex',
  margin: '20px auto 0 auto',
});

export const Separator = styled('div', {
  display: 'flex',
  margin: '17px auto 20px auto',
  height: '1px',
  background: '$separator',
  width: '65%',
  transition: 'all 0.3s ease',
});

export const AppIcon = styled('div', {
  alignItems: 'center',
  borderRadius: '10px',
  margin: '20px auto 0 auto',
  paddingTop: '10px',
  paddingRight: '10px',
  paddingLeft: '10px',
  paddingBottom: '6px',
  backgroundColor: '$iconBackground',
});

export const AddIcon = styled('div', {
  alignItems: 'center',
  borderRadius: '10px',
  margin: '20px auto 0 auto',
  minWidth: '65%',
  maxWidth: '65%',
  minHeight: '46px',
  maxHeight: '46px',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$iconBackground',
});

export const Active = styled('div', {
  display: 'flex',
});

export const Indicator = styled('div', {
  height: '30px',
  margin: 'auto 0 auto 0',
  width: '3px',
  borderRadius: '0px 8px 8px 0px',
  backgroundColor: '$activeIconBorder',
});

export const ActiveAppIcon = styled('div', {
  alignItems: 'center',
  borderRadius: '10px',
  margin: '0px auto 0 auto',
  paddingTop: '10px',
  paddingRight: '10px',
  paddingLeft: '10px',

  paddingBottom: '6px',
  backgroundColor: '$iconBackground',
  border: '2px solid $activeIconBorder',
  scale: '0.95',
});
