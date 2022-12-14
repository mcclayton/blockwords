import { WordGrid, didWin, highlightMatches } from 'builder';
import { useEffect, useState } from 'react';

import { Block, Highlight } from '../Block';
import { Grid } from '../Grid';
import { Row } from '../Row';

type Coordinate = {
  x: number;
  y: number;
};

type Props = {
  initBoard: WordGrid;
};

export function GameBoard({ initBoard }: Props) {
  const [board, setBoard] = useState(initBoard);
  const updateBoard = (b: WordGrid) => setBoard(highlightMatches(b).grid);
  // Update to reflect new board
  useEffect(() => {
    updateBoard(initBoard);
  }, [initBoard]);

  useEffect(() => {
    if (didWin(board)) {
      // eslint-disable-next-line no-alert
      window.alert('Congratulations, you won!');
    }
  }, [board]);

  const [selected, setSelected] = useState<Nullable<Coordinate>>(null);
  const [selectedTwo, setSelectedTwo] = useState<Nullable<Coordinate>>(null);

  function handleSelection(val: string, coord: Coordinate) {
    if (selected && !selectedTwo) {
      setSelectedTwo(coord);

      // Already a selection, so swap them
      const valA = board[selected.x][selected.y].val;
      const valB = board[coord.x][coord.y].val;

      // Swap
      board[selected.x][selected.y].val = valB;
      board[coord.x][coord.y].val = valA;

      setTimeout(() => {
        setSelected(null);
        setSelectedTwo(null);
        updateBoard(board);
      }, 100);
    } else {
      // No selection, select coord
      setSelected(coord);
    }
  }

  function getHighlight(match: { row?: boolean; col?: boolean }) {
    if (match.col && match.row) {
      return Highlight.Double;
    }
    if (match.row || match.col) {
      return Highlight.Single;
    }
    return Highlight.None;
  }

  return (
    <Grid>
      {board.map((row, rowIdx) => (
        <Row key={rowIdx}>
          {row.map((block, colIdx) => (
            <Block
              immovable={Boolean(block.immovable)}
              onClick={(val, x, y) => handleSelection(val, { x, y })}
              key={`${rowIdx}-${colIdx}`}
              val={block.val}
              x={rowIdx}
              y={colIdx}
              highlight={getHighlight(block.match)}
              selected={
                (rowIdx === selected?.x && colIdx === selected?.y) ||
                (rowIdx === selectedTwo?.x && colIdx === selectedTwo?.y)
              }
            />
          ))}
        </Row>
      ))}
    </Grid>
  );
}
