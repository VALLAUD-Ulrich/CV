const profilStyle = {
    width:'300px',
    height:'300px',
    borderRadius:'50%'
}

const borderProfilStyle = {
    width:'300px',
    height:'300px',
    borderRadius:'50%',
    border:'solid 5px white',
    position: 'absolute',
    top:'15%',
    left:'10%',
}

const borderPresentation = {
    border:'1px solid white',
    width:'700px',
    position : 'absolute',
    top: '55%',
    left: '5%'
}
const pStyle = {
    color:'white',
    fontSize:'1.5em',
    padding:'20px'
}

export default function Presentation(){
    return <>
    <div className="border-img-presentation" style={borderProfilStyle}>
        <img className="photo-profil" src="../public/photo-profil.jpg" alt="photo de présentation" style={profilStyle}/>
    </div> 
    <div className="border-presentation" style={borderPresentation}>
        <p style={pStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, accusamus eaque tenetur quod rerum debitis iure quis dolorem provident sit harum ipsum aperiam cupiditate possimus, nemo inventore iste perferendis a!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ducimus unde nulla iusto omnis ipsa dicta dignissimos? Minima consectetur provident consequatur facere voluptas doloribus at magnam asperiores non, et quia!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eligendi libero eveniet minima? Animi odit accusantium repudiandae. Placeat, unde. Atque ut odio dolorum, quasi molestias eveniet optio cupiditate nisi incidunt.
        </p>

    </div>
    
    </>
}