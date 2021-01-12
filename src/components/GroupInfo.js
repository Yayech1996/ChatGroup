import React from 'react' ;

 const GroupInfo=({group,del}) =>{

    return (
        <div>
            <label className="head" >Group Name:</label> <br/>
            {group.groupName} 
            <button onClick={() => del(group.groupName)}>DEL</button>
            <button >EDIT</button>
            <br/>

            <label className="head" >People List Of Group:</label><br/>
            {group.peopleList.map(p => 
            <>
            {p.name} - {p.phone}
            <br/>
            </>
            )}
       </div>
    )
}

export default GroupInfo

