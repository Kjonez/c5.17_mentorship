import React, { Component } from 'react';
import axios from 'axios';
import './css/modal.css';

const BASE_URL = 'http://localhost:3001/mail';

class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            email: '',
            text_one: '',
            text_two: '',
            name: ''
        };
    }

    emailInput(e) {
        console.log('EMAIL INPUT', e.target.value);
        this.setState({
            email: e.target.value
        });
    }
    textInputOne(e) {
        console.log('INPUT ONE', e.target.value);
        this.setState({
            text_one: e.target.value
        });
    }
    textInputTwo(e) {
        console.log('INPUT TWO', e.target.value);
        this.setState({
            text_two: e.target.value
        });
    }
    nameInput(e) {
        console.log('NAME INPUT', e.target.value);
        this.setState({
            name: e.target.value
        });
    }

    sendMail() {
        console.log('TEXT OBJECT WORKS:', text);
        // axios
        //     .post(`${BASE_URL}`, { email, name, text })
        //     .then(resp => {
        //         console.log('Its working!', resp);
        //     })
        //     .catch(error => {
        //         console.warn('Error adding to server', error);
        //     });
        // this.setState({ showModal: false });
    }

    render() {
        const { text, className, message, title } = this.props;
        if (this.state.showModal) {
            return (
                <div className="c-modal">
                    <div className="c-modal-content">
                        <input
                            type="text"
                            className="materialFormBorders form-control mb-3"
                            placeholder="Name"
                            onChange={e => this.nameInput(e)}
                            // ref={name => (this.name = name)}
                        />
                        <textarea
                            type="text"
                            className="materialFormBorders form-control mb-3"
                            rows="7"
                            placeholder="About me & Goals"
                            onChange={e => this.textInputOne(e)}
                            // ref={text => (this.text_one = text)}
                        />
                        <textarea
                            type="text"
                            className="materialFormBorders form-control mb-3"
                            rows="7"
                            placeholder="Questions"
                            onChange={e => this.textInputTwo(e)}
                            // ref={text => (this.text_two = text)}
                        />
                        <input
                            type="text"
                            className="materialFormBorders form-control mb-3"
                            placeholder="Email"
                            onChange={e => this.emailInput(e)}
                            // ref={email => (this.email = email)}
                        />
                        <div className="right">
                            <button
                                onClick={() => {
                                    this.setState({ showModal: false });
                                }}
                                className="btn c-btn mr-6"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => this.sendMail()}
                                className="btn c-btn"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <button
                className={className}
                onClick={() => this.setState({ showModal: true })}
            >
                {text}
            </button>
        );
    }
}

export default Confirm;

//need to do an axios call to firebase to grab their email and id which will just be Dansu.Mentoru@gmail.com
//After grabbing email I need to correnspond that email and id to whichever card's contact button is clicked
//whichever card is clicked I need that cards inputs to send through nodemailer to Dansu.Mentoru@gmail.com
