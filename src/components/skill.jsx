const displayStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    height:'70%',
    width:'100%'
}
const displayLogoStyle = {
    display: "flex",
    position:'relative',
    flexDirection: "column",
    justifyContent: "center",
}
const positionStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width:'calc(100%/3)',
    display:'none'
}
const imageStyle = {
    width: "200px",
    height: "200px"
}
export default function Skills(){
    return <>
    <div className="skill" style={displayStyle}>
        <div className="display-skill" style={displayLogoStyle}>
            <img src="../public/html5.svg" alt="logo_html" style={imageStyle}/>
            <p style={positionStyle}>HTML5</p>
        </div>
        <div className="display-skill" style={displayLogoStyle}>
            <img src="../public/css3.svg" alt="logo_css" style={imageStyle}/>
            <p style={positionStyle}>CSS3</p>
        </div>
        <div className="display-skill" style={displayLogoStyle}>
            <img src="../public/javascript.svg" alt="logo_js" style={imageStyle}/>
            <p style={positionStyle}>JavaScript</p>
        </div>
        <div className="display-skill" style={displayLogoStyle}>
            <img src="../public/react.svg" alt="logo_react" style={imageStyle}/>
            <p style={positionStyle}>React</p>
        </div>
        <div className="display-skill" style={displayLogoStyle}>
            <img src="../public/nodejs.svg" alt="logo_nodejs" style={imageStyle}/>
            <p style={positionStyle}>NodeJs</p>
        </div>
    </div>
    </>
}