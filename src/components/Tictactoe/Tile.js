import "./Tile.css";
function Tile(props) {
  function clickHandler() {
    if (props.val != "") {
      alert("Choose an Empty Space!");
    } else {
      props.onClick();
    }
  }

  return (
    <button className="game-button" onClick={clickHandler}>
      {props.val}
    </button>
  );
}

export default Tile;
