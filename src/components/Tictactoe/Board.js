import Tile from "./Tile";
import "./Board.css";

function Board(props) {
  return (
    <div className="board">
      {props.gameBoard.map((value, index) => (
        <Tile val={value} key={index} onClick={() => props.onClick(index)} />
      ))}
    </div>
  );
}

export default Board;
