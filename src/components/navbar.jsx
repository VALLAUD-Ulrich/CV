const navStyle = {
    width:'100%' ,
    display:'flex',
    alignItems:'center',
    backgroundColor:'black',
    opacity:'0.8',
    height:'100px' ,
    fontSize:'2em'
}
const navListStyle = {
    display:'flex',
    justifyContent:'space-around',
    width:'100%',
    listStyleType:'none'
}
const linkStyle ={
    textDecoration:'none',
    color:'white'
}


export default function Navbar(){
    return(
        <> 
            <nav className="navbar" style={navStyle}>
                <ul className="navbar-list" style={navListStyle}>
                    <li className="navbar-item"><a href="#" style={linkStyle}>A propos de moi</a></li>
                    <li className="navbar-item"><a href="#" style={linkStyle}>Compétences</a></li>
                    <li className="navbar-item"><a href="#" style={linkStyle}>Réalisations</a></li>
                    <li className="navbar-item"><a href="#" style={linkStyle}>Me contacter</a></li>
                </ul>
            </nav>
        </>
        )
}