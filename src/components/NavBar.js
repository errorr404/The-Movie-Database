import React from 'react'
import {Link} from "react-router-dom";

class NavBar extends React.Component {
    render()
    {
        return(
       <div style={{display:"flex",justifyContent:"space-around", flexWrap:"wrap",border:"1px solid black",height:"20px",width:"100%",marginBottom:"20px"}}>
            <Link to ='/'>Home </Link>
          <Link to='/favourite'> Your favourite Movie</Link>
       </div>
        )
    }
}

export default NavBar;