import React, { Component } from 'react';
import './css/modal.css';
import SearchList from './search_list.js';
import Confirm from './contact_modal.js';

class SearchModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showForm: false
        };
    }

    toggleForm() {
        this.setState({ showForm: !this.state.showForm });
        this.props.toggleModal();
    }

    render() {
        const {
            secondModal,
            showModal,
            toggleModal,
            name,
            aboutme,
            affiliates,
            serving
        } = this.props;

        if (showModal && !this.state.showForm) {
            return (
                <div className="del-modal">
                    <div className="del-modal-content">
                        <p>
                            TITLE: {name}
                        </p>
                        <p>
                            About me: {aboutme}
                        </p>
                        <p>
                            Affiliates: {affiliates}
                        </p>
                        <p>
                            Serving City: {serving}
                        </p>
                        <button
                            onClick={() => {
                                toggleModal();
                            }}
                            className="btn btn-outline-danger "
                        >
                            Cancel
                        </button>
                        <Confirm
                            showForm={this.state.showForm}
                            onClick={() => this.toggleForm()}
                        />
                    </div>
                </div>
            );
        } else if (this.state.showForm) {
            return (
                <Confirm
                    showForm={this.state.showForm}
                    onClick={() => this.toggleForm()}
                />
            );
        }
        return <div onClick={() => this.toggleModal} />;
    }
}

export default SearchModal;