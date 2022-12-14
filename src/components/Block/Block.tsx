import cx from 'classnames';

import { block, blockHighlight, letterContainer, shine } from './Block.css';

export enum Highlight {
  Double = 'double',
  Single = 'single',
  None = 'none',
}

type Props = {
  val: Nullable<string>;
  x: number;
  y: number;
  selected?: boolean;
  immovable: boolean;
  highlight: Highlight;
  onClick?: (val: string, x: number, y: number) => void;
};

export function Block({
  val,
  x,
  y,
  selected,
  immovable,
  onClick,
  highlight,
}: Props) {
  const value = val ? val.toUpperCase() : '-';
  const canClick = !immovable && onClick;
  return (
     
    <div
      className={cx(block.default, {
        [block.selected]: selected,
        [block.moveable]: !immovable,
        [block.immovable]: immovable,
        [blockHighlight.single]: highlight === Highlight.Single,
        [blockHighlight.double]: highlight === Highlight.Double,
      })}
      {...(canClick && { onClick: () => onClick(value, x, y) })}
    >
      <div className={letterContainer}>
        {!immovable && (
          <div
            className={cx(shine.base, {
              [shine.selected]: selected,
            })}
          />
        )}
        <div>{value}</div>
      </div>
    </div>
  );
}
