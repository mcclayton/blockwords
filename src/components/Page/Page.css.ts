import { style } from '@vanilla-extract/css';
import { BLOCK_FG, PAGE_BG } from 'theme.css';

export const page = style({
  width: '100%',
  height: '100%',
  background: PAGE_BG,
});

export const boardContainer = style({
  width: 'fit-content',
});

export const header = style({
  color: BLOCK_FG,
  margin: 0,
  fontWeight: 400,
  fontFamily: 'Pacifico !important',
  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: '30px',
    },
    'screen and (min-width: 600px)': {
      fontSize: '33px',
    },
    'screen and (min-width: 768px)': {
      fontSize: '35px',
    },
    'screen and (min-width: 1200px)': {
      fontSize: '40px',
    },
  },
});
