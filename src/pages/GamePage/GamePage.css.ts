import { style, styleVariants } from '@vanilla-extract/css';
import { PAGE_BG } from 'theme.css';

export const page = style({
  width: '100%',
  height: '100%',
  background: PAGE_BG,
});

export const baseFlexCenter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const flexCenter = styleVariants({
  row: [baseFlexCenter, { flexDirection: 'row' }],
  column: [baseFlexCenter, { flexDirection: 'column' }],
});

export const button = styleVariants({
  base: { padding: '10px' },
  selected: { border: '1px solid blue' },
});

export const boardContainer = style({
  width: 'fit-content',
});

export const header = style({
  color: '#c9d4c0',
  fontSize: '40px',
  margin: 0,
  fontWeight: 400,
});
