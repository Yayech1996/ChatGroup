import React from 'react' ;

 const PeopleList=({peopleList}) => {
    return (
        
            <div> 
                {peopleList.map(p => {
                return(
                    <>
                    <label>
                    {p.name} - {p.phone} <button> Add </button>
                    </label> <br/>
                    </>
                )
            })}
              
        </div>
    )
}

export default PeopleList