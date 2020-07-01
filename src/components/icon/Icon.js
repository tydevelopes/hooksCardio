import React, { Component, createRef } from "react";
import styles from "./Icon.module.css";
import Tooltip from "./ToolTip";

export default class Icon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ishovered: false,
      top: "",
      left: "",
      height: ""
    };
  }

  handleMouseEnter = e => {
    let dimensions = e.target.getBoundingClientRect();
    this.setState({
      ishovered: true,
      top: dimensions.top,
      left: dimensions.left,
      height: dimensions.height
    });
  };

  handleMouseLeave = e => {
    this.setState({
      ishovered: false
    });
  };

  render() {
    const { top, left, height } = this.state;
    const topStyles = {
      top: `${top + height + 5}px`,
      left
    };

    console.log("<Icon/> rendered");

    return (
      <div className={styles.icontainer}>
        <i
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.props.action}
          className={`material-icons ${styles.default}`}
        >
          {this.props.name}
        </i>
        {this.state.ishovered ? (
          <Tooltip styles={topStyles} content={this.props.content} />
        ) : null}
      </div>
    );
  }
}
