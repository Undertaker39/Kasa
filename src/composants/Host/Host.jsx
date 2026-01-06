import './Style.css'

function Host(host){
    const Host = host.host
    return(
        <div className='host'>
            <p className='name-host'>{Host.name}</p>
            <img className='img-host' src={Host.picture} alt={Host.name}></img>
        </div>

    )
}

export default Host