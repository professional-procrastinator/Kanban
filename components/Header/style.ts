import { styled } from '../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  padding: '19px 24px',
  justifyContent: 'space-between',
  minHeight: '34px',
  maxHeight: '34px',
  borderBottom: '1px solid $separator',

  '*': {
    margin: 'auto 0',
  },
});

export const ContainerPath = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',
  margin: 'auto 0',

  '*': {
    margin: 'auto 0',
  },

  ':nth-child(1)': {
    color: '#282A2F',
    fontWeight: '600',
  },

  ':nth-child(2)': {
    color: '#6C6F75',
    fontWeight: '600',
  },

  ':nth-child(3)': {
    color: '#6C6F75',
  },

  ':nth-child(4)': {
    marginLeft: '7px',
    backgroundColor: '#EEEEEE',
    padding: '6px 9px',
    borderRadius: '6px',
    color: '#6C6F75',
    height: 'fit-content',
  },
});

export const SearchBar = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  backgroundColor: '#EFEFEF',
  padding: '12px 13px',
  borderRadius: '8px',

  '*': {
    margin: 'auto',
  },
});

export const SearchBarInput = styled('input', {
  color: '#5C6066',
  border: 'none',
  backgroundColor: '#EFEFEF',
  fontFamily: '$GTWalshiem',
  fontSize: '15px',

  '&:focus': {
    outline: 'none',
    border: 'none',
  },
});

export const RightControls = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  margin: '-8.5px 0',

  '*': {
    margin: 'auto',
  },
});

export const LayoutIcon = styled('div', {
  padding: '14px 12px 10px 12px',
  borderRadius: '11px',
  backgroundColor: '#ffffff',
  border: '1px solid #DFE1E4',
});
