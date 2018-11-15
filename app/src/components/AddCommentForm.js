import React, {Component} from 'react';

class AddCommentForm extends Component {

    state = {
        user: '',
        comment: ''
    };

    handleChangeUser = (event) => {
        this.setState({
            user: event.target.value
        });
    };

    handleChangeComment = (event) => {
        this.setState({
            comment: event.target.value
        });
    };

    handleSubmit = (event) => {
        const data = {
            user: this.state.user,
            comment: this.state.comment
        };
        alert('User: ' + data.user + ', Comment: ' + data.comment);
        event.preventDefault();
    };

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    User:
                    <input type="text" name="user" value={this.state.user} onChange={this.handleChangeUser}/>
                </label>
                <label>
                    Comment:
                    <input type="text" name="comment" value={this.state.comment} onChange={this.handleChangeComment}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default AddCommentForm