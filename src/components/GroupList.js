import React from 'react' ;
import GroupInfo from './GroupInfo' ;

const GroupList =({groups,del}) => {

        return (
            <div>
                <h2>Groups List</h2>

               {groups.map(g => { 
                   return(<>
                   <GroupInfo group={g} del={del}/>
                   <br/>
                   </> )
               })}
               
            </div>
        );
}

export default GroupList
