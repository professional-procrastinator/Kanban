import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  border: '1px solid #EAEDF0',
  padding: '14px',
  position: 'relative',
  cursor: 'grab',

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: '-6px',
    zIndex: '-1',
    width: '96.5%',
    left: '5.3px',
    borderRadius: '7px',
    height: '15px',
    borderRight: '1px solid #EAEDF0',
    borderLeft: '1px solid #EAEDF0',
    borderBottom: '1px solid #EAEDF0',
    backgroundColor: '#FFFFFF',
  },
});

export const ContainerTopic = styled('div', {
  color: '#7F8995',
  fontSize: '12px',
});

export const ContainerTitle = styled('div', {
  marginTop: '10px',
  color: '#111118',
  fontSize: '24px',
  fontWeight: 'bold',
});

export const ContainerDescription = styled('div', {
  marginTop: '10px',
  color: '#7F8995',
  fontSize: '16px',
  fontWeight: 'normal',
  lineHeight: '22px',
});

export const DetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '15px',
});

export const ResearchChip = styled('div', {
  alignItems: 'center',
  margin: 'auto 0',
  padding: '6px 9px',
  borderRadius: '5px',
  fontWeight: '800',
  fontSize: '15px',

  color: '#8478FE',
  backgroundColor: 'rgba(132,120,254,0.15)',
});

export const UIChip = styled('div', {
  alignItems: 'center',
  margin: 'auto 0',
  padding: '6px 9px',
  borderRadius: '5px',
  fontWeight: '800',
  fontSize: '15px',
  color: '#2F6BFE',
  backgroundColor: 'rgba(47,107,254,0.15)',
});

export const PlanningChip = styled('div', {
  alignItems: 'center',
  margin: 'auto 0',
  padding: '6px 9px',
  borderRadius: '5px',
  fontWeight: '800',
  fontSize: '15px',
  color: '#78C552',
  backgroundColor: 'rgba(120,197,82,0.15)',
});

export const Avatars = styled('div', {
  margin: 'auto 0',
  display: 'flex',
  flexDirection: 'row',
});

export const Avatar = styled('div', {
  marginLeft: '-13px',
});

export const Separator = styled('div', {
  margin: '12px -14px 0px -14px',
  height: '1px',
  backgroundColor: '#EAEDF0',
});

export const ActionsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '15px',
});

export const ActionsLeft = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '12px',

  '*': {
    margin: 'auto 0',
  },
});

export const ActionsRight = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});

export const Action = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',

  ':nth-child(2)': {
    color: '#98A5B3',
  },

  '*': {
    margin: 'auto 0',
  },
});
