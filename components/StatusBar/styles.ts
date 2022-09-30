import { styled } from '../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0px 24px 3px 24px',
  minHeight: '63px',
  maxHeight: '63px',
  borderBottom: '1px solid $separator',

  '*': {
    margin: 'auto 0',
  },
});

export const LeftContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
});

export const RightContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
});

export const Avatars = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',

  '*': {
    margin: 'auto',
  },
});

export const Button = styled('div', {
  transition: 'all 0.3s ease',
  fontFamily: '$GTWalshiem',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  padding: '11px 9px',
  boxShadow: '0px 5px 0px #DFE1E4',
  border: '1.5px solid #DFE1E4',
  maxHeight: '10px',
  minHeight: '10px',
  userSelect: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '600',
  fontSize: '16.5px',
  color: '#6C6F75',
  gap: '5px',

  '&:hover': {},
  '&:active': {
    boxShadow: 'none',
    translate: '0px 8px',
  },
  '&:focus': {
    outline: 'none',
  },

  '*': {
    margin: 'auto',
  },

  ':nth-child(1)': {
    marginTop: '-5px',
  },

  ':nth-child(2)': {
    marginTop: '-7px',
  },
});

export const PaddingButton = styled('div', {
  transition: 'all 0.3s ease',
  fontFamily: '$GTWalshiem',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  padding: '11px 13px',
  boxShadow: '0px 5px 0px #DFE1E4',
  border: '1.5px solid #DFE1E4',
  maxHeight: '10px',
  minHeight: '10px',
  userSelect: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '600',
  fontSize: '16.5px',
  color: '#6C6F75',
  gap: '5px',

  '&:hover': {},
  '&:active': {
    boxShadow: 'none',
    translate: '0px 8px',
  },
  '&:focus': {
    outline: 'none',
  },

  '*': {
    margin: 'auto',
  },

  ':nth-child(1)': {
    marginTop: '-5px',
  },

  ':nth-child(2)': {
    marginTop: '-7px',
  },
});
