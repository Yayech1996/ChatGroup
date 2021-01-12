import React,{useState} from 'react' ;

 const Nav=({AddMode,Searcher}) =>{ 

    const [search,setSearch] = useState("");

    return (
        <div>
            <button onClick={AddMode}> ADD </button>
            <input type="text" id="search" onChange={(e) => setSearch(e.target.value)} value={search} />
            <button type="button" onClick={() => Searcher(search)}> SRCH </button>
        </div>
    )
}

export default Nav

