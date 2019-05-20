import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};


const cellStyleIsOver = {...cellStyle, backgroundColor:"grey"}
//const Cell = () => <div style={cellStyle}>?</div>;

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOver: false,
    };
  }

  handlerMouseOver() {
    this.setState({isMouseOver:true});
  }
  
  handlerMouseOut() {
    this.setState({isMouseOver:false});
  }
  

  render() {
    return (
      <div style={!this.state.isMouseOver ? cellStyle : cellStyleIsOver}
        onMouseOver={() => this.handlerMouseOver()}
        onMouseOut={() => this.handlerMouseOut()}
        onClick={() => this.props.PlayerClickedInterB()}
      >{this.props.c}</div>
    );
  }

}




export default Cell;
