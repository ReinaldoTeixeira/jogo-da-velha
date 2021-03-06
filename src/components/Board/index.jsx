import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Square from '../Square';

const Board = (props) => {
  const { squares, onClick } = props;

  const renderSquare = (index) => (
    <Square
      key={index}
      value={squares[index]}
      onClick={() => onClick(index)}
    />
  );

  const renderBoard = (x, y) => {
    const lines = [];
    let counter = 0;

    for (let indexX = 0; indexX < x; indexX += 1) {
      const columns = [];
      for (let indexY = 0; indexY < y; indexY += 1) {
        columns.push(renderSquare(counter));
        counter += 1;
      }
      lines.push(<div key={indexX} style={styles.boardRow}>{columns}</div>);
    }
    return lines;
  };

  return (
    <div>
      {renderBoard(3, 3)}
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
