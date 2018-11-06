import React from 'react';

class MessageOverlay extends React.Component {

    render() {

        const overlay =
            this.props.showOverlay 
            ? (<div className='message-overlay'>
                <div className='message-container'>
                    <div className='message-top-half'>
                    <h2>{`Player ${this.props.winningPlayer} Wins!`}</h2>
                    </div>
                    <div className='message-bottom-half'>
                        <button className='message-button' onClick={() => this.props.resetGame()}>Reset</button>
                    </div>
                </div>
            </div>)
            :(null)

        return (
            <div>
                {overlay}
            </div>
        );
    }
}

export default MessageOverlay;