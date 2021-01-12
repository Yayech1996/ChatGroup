import React  from 'react'
import Axios from 'axios';

import AddGroup from "./AddGroup" ;
import GroupList from './GroupList' ;
import Nav from './Nav' ;
import People from './PeopleList' ;

const url = "https://groupchat-b8dd3-default-rtdb.firebaseio.com/" ;

export class Container extends React.Component {

    state={
        Group : [],
        List : [],
        People : [],
        Edit : "" ,
        Mode : true,
        Add : false 
    }

   GetGroups =() =>{
        Axios.get(`${url}Groups.json`)
        .then(response =>
            { this.setState({
                 Group : []
             });
             let data = Object.values(response.data);
             this.setState({
                   Group : data,
                   List : data,
                   Add : false
                });
            });
    }

    GetPeople =() =>{
        Axios.get(`${url}List.json`)
        .then(response =>
            { this.setState({
                 People : []
             });
             let data = Object.values(response.data);
             this.setState({
                   People : data ,
                   Add : false
                });
            });
    }

    DelGroup =(name) =>{
            Axios.delete(`${url}/Groups/${name}.json`)
            .then(response => {
                this.setState({
                    Group:this.state.Group.filter(p=>{
                    return p.groupName !== name;
                    }),
                    Add : false
                });
            })
    }

    constructor(props){
        super(props);
        this.GetGroups();
        this.GetPeople();
    }

    AddMode=() =>{
        this.setState({
            Mode : false 
        });
    }

    AddGroups=(group) =>{
        let data =`{"${group.groupName}":"${JSON.stringify(group)}"}` ;
    
        Axios.patch( `${url}/Groups.json`, data )
        .then(response => {
            this.GetGroups();
            }
        );
        this.setState({
            Edit : "",
            Mode : true
        });
    }

    SearchData =(data) =>{
        let list ;
        data === "" ? list=this.state.Group :
             list=this.state.Group.filter(gr => { return (gr.groupName === data)}) ;
             this.setState({
                 List : list ,
                 Add : false
             })
    }

    AddShow=() =>{
        this.setState({
            Add : true
        });
    }
    
    render() {
        return (
            <div className="container">
                <h1>Main Page</h1>
                <Nav AddMode={this.AddMode} Searcher={this.SearchData} />
                {(this.state.Mode)?
                <GroupList groups={this.state.List} del={this.DelGroup} /> :
                <>
                {(this.state.Add) ? 
                <>
                <AddGroup AddGroup={this.AddGroups} Group={this.state.Edit} Add={this.AddShow} />
                <People peopleList={this.state.People}/> 
                </>: 
                <AddGroup AddGroup={this.AddGroups} Group={this.state.Edit} Add={this.AddShow} />
                }
                </>
                 }
            </div>
        )
    }
}

export default Container
