import { styled } from '../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  gap: '35px',
  padding: '40px 24px 12px 24px',
  overflowX: 'auto',
  overflowY: 'hidden',
  height: '81%',
});

export const Column = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  minWidth: '340px',
  maxWidth: '340px',
});

export const ColumnHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const ColumnHeaderLeft = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',

  '*': {
    margin: 'auto 0',
  },

  ':nth-child(1)': {},

  ':nth-child(2)': {
    fontSize: '19px',
    fontWeight: 'bold',
    marginTop: '3px',
  },

  ':nth-child(3)': {
    marginLeft: '4.5px',
    backgroundColor: '#F7F9FA',
    padding: '3px 14px',
    borderRadius: '10px',
    border: '1px solid #EAEDF0',
    fontWeight: 'bold',
  },
});

export const ColumnHeaderRight = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '12px',

  '*': {
    margin: 'auto 0',
    cursor: 'pointer',
    transition: 'all 0.1s ease',

    '&:hover': {
      scale: '1.1',
    },
  },
});

export const ColumnBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const ToDoSeparator = styled('div', {
  width: '100%',
  height: '2px',
  backgroundColor: '#111118',
  borderRadius: '16px',
});

export const ProgressSeparator = styled('div', {
  width: '100%',
  height: '2px',
  backgroundColor: '#4734FE',
  borderRadius: '16px',
});

export const CompletedSeparator = styled('div', {
  width: '100%',
  height: '2px',
  backgroundColor: '#78C552',
  borderRadius: '16px',
});
