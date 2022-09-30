import { styled } from '../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0px 24px 3px 24px',
  minHeight: '55px',
  maxHeight: '55px',
  borderBottom: '1px solid $separator',

  '*': {
    margin: 'auto 0',
  },
});

export const LeftContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',

  '*': {
    margin: 'auto 0',
  },
});

export const RightContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',

  '*': {
    margin: 'auto 0',
  },
});

export const Avatars = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',

  '*': {
    margin: '2px 0px !important',
  },
});

export const ActiveModeContainer = styled('div', {
  backgroundColor: '#DFE1E4',
  padding: '3px 9px',
  borderRadius: '8px',
});

export const ModeContainer = styled('div', {
  backgroundColor: 'transparent',
  padding: '3px 9px',
});

export const SwitchButton = styled('div', {
  transition: 'all 0.3s ease',
  fontFamily: '$GTWalshiem',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  padding: '10.5px 2px',
  boxShadow: '0px 5px 0px #DFE1E4',
  border: '1.5px solid #DFE1E4',
  maxHeight: '10px',
  minHeight: '10px',
  minWidth: '80px',
  maxWidth: '80px',
  userSelect: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '600',
  fontSize: '16.5px',
  gap: '7px',
  position: 'relative',

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
    marginTop: '-7px',
  },

  ':nth-child(3)': {
    marginTop: '-7px',
  },
});

export const ButtonSeparator = styled('div', {
  width: '1px',
  top: '10px',
  bottom: '8px',
  backgroundColor: '$separator',
  position: 'absolute',
  margin: 'auto 12px',
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

export const ShareButton = styled('div', {
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
  gap: '7px',

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
    marginTop: '-4px',
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
