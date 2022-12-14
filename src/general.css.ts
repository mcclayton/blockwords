import { style, styleVariants } from '@vanilla-extract/css';
import { GRID_CONTAINER_BORDER, PAGE_BG } from 'theme.css';

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
  base: {
    padding: '8px 12px',
    background: PAGE_BG,
    color: GRID_CONTAINER_BORDER,
    fontWeight: 'bold',
    margin: '6px',
    borderRadius: '8px',
    border: `2px solid ${GRID_CONTAINER_BORDER}`,
    borderBottom: `4px solid ${GRID_CONTAINER_BORDER}`,
    selectors: {
      '&:focus': {
        borderBottom: `2px solid ${GRID_CONTAINER_BORDER}`,
      },
    },
  },
  selected: {
    borderBottom: `2px solid #{GRID_CONTAINER_BORDER}`,
  },
});
