import './Style.css'

function Error(){
    return(
        <section className='error'>
            <p className='error-title'>404</p>
            <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
            <a href='' className='error-link'>Retourner sur la page d'accueil</a>
        </section>
    )
}

export default Error