import React, {Component} from 'react';
import './style.css'

class CommentForm extends Component {

    state = {
        user: '',
        comment: ''
    };

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        const data = {
            user: this.state.user,
            comment: this.state.comment
        };
        this.setState({
            user: '',
            comment: ''
        });

        event.preventDefault();
    };

    validate = (user, comment) => {
        return {
            user: user.length < 5 || user.length > 15,
            comment: comment.length < 20 || comment.length > 50,
        };
    };

    render() {
        const errors = this.validate(this.state.user, this.state.comment);
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    User:
                    <input className={errors.user ? "error" : ""} type="text" name="user" value={this.state.user}
                           onChange={this.handleChange}/>
                </label>
                <label>
                    Comment:
                    <input className={errors.comment ? "error" : ""} type="text" name="comment"
                           value={this.state.comment}
                           onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default CommentForm