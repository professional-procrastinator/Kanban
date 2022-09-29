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
  height: '100vh',
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
});

export const SidebarLevel = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '14px 18px',
  height: '60px',
  gap: '12px',
});

export const SidebarLevelTitle = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const SidebarLevelTitleLevel = styled('div', {
  color: '$neutralBlack100',
  fontWeight: '800',
  fontSize: '16px',
  display: 'flex',
  gap: '5px',

  ':nth-child(2)': {
    marginTop: '2px',
  },
});

export const SidebarLevelTitleLevelNumber = styled('div', {
  color: '$neutralBlack70',
  fontWeight: '400',
  fontSize: '16px',
  marginTop: '2px',
});

export const SidebarLevelProgress = styled('div', {
  backgroundColor: '#F2F5F7',
  height: '15px',
  width: '100%',
  margin: '0 auto',
  borderRadius: '100px',
  position: 'relative',

  '&::before': {
    content: '',
    width: '45%',
    height: '15px',
    position: 'absolute',
    top: '0',
    left: '0',
    borderRadius: '100px',
    backgroundImage: 'url(/Progress.png)',
  },

  '&::after': {
    content: '🎉',
    fontSize: '12px',
    position: 'absolute',
    top: '-5px',
    left: '120px',
    height: '25px',
    padding: '2px',
    width: '25px',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    border: '2px solid #EAEDF0',
    boxSizing: 'border-box',
    fontFamily: 'GT Walsheim',
  },
});

export const Separator = styled('div', {
  display: 'flex',
  margin: '-3px auto 11px auto',
  height: '1px',
  background: '$separator',
  width: '100%',
});

export const Links = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const LinkHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '14px 18px',

  '*': {
    margin: 'auto 0',
  },
});

export const LinkHeaderDetails = styled('div', {
  display: 'flex',
  gap: '10px',

  '*': {
    margin: 'auto',
  },

  ':nth-child(2)': {
    color: '#36383A',
    fontWeight: '600',
    fontSize: '18px',
  },
});

export const LinkHeaderIcon = styled('div', {
  margin: '5px 0px 0px 0',
});
