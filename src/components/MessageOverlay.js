import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import React from "react";

class MessageOverlay extends React.Component {
  render() {
    const overlay = this.props.showOverlay ? (
      <div key={1} className="message-container">
        <div className="message-top-half">
          <h2>{`Player ${this.props.winningPlayer} Wins!`}</h2>
        </div>
        <div className="message-bottom-half">
          <button
            className="message-button"
            onClick={() => this.props.resetGame()}
          >
            Reset
          </button>
        </div>
      </div>
    ) : null;

    return (
      <div
        className={`message-overlay ${
          this.props.showOverlay ? "message-overlay-on" : ""
        }`}
      >
        <ReactCSSTransitionGroup
          transitionName="side-slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={200}
        >
          {overlay}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default MessageOverlay;
