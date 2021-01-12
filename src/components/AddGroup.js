import React, { Component } from 'react'

export class AddGroup extends Component {

    state={
        groupName : "",
    }
    
    onChange =(e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Add Group</h1>

                <label className="head">Name Of Group :</label><br/>
                <input type="text" id="groupName"  value={this.state.groupName} onChange={this.onChange}/><br/>
                <br/>
                {(this.state.groupName === "") ? <></> : 
                <button onClick={() => this.props.Add()}> Create </button>
            }
            </div>
        )
    }
}

export default AddGroup
