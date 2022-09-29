import { styled } from '../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '17%',
  backgroundColor: '$sidebar',
  borderRight: '1px solid $separator',
  minWidth: '350px',
  maxWidth: '350px',
  top: '0',
  bottom: '0',
  left: '0',
});

export const SidebarHeader = styled('div', {
  display: 'flex',
  paddingLeft: '20px',
  paddingTop: '13px',
  paddingBottom: '12px',
  alignItems: 'center',
  height: '47px',
  fontSize: '18px',
  fontWeight: '800',
});

export const SidebarBanner = styled('div', {
  width: '100%',
  height: '200px',
});

export const SidebarLevel = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '6px',
  backgroundColor: 'red',
  height: '120px',
});
