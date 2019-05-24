import React from 'react';

class ModalButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    showModal = () => {
        this.setState({ isModalVisible: true });
    }

    hideModal = () => {
        this.setState({ isModalVisible: false });
    }

    render() {
        return (
            <React.Fragment>
                <a
                    className="navbar-item"
                    onClick={() => this.showModal()}
                >
                    {this.props.text}
                </a>

                {this.state.isModalVisible &&
                    <div className="modal is-active">
                        <div className="modal-background"
                            onClick={() => this.hideModal()}
                        ></div>
                        <div className="modal-content">
                            {this.props.modalContent}
                        </div>
                        <button
                            className="modal-close is-large"
                            aria-label="close"
                            onClick={() => this.hideModal()}
                        ></button>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default ModalButton;