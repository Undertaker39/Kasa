import './Style.css'

function Tags ({tags}) {
    return(
        <div className='tags'>
            {tags.map((element,index) => (
                <p key={index} className='tag'>{element}</p>
            ))}
        </div>
    )
}

export default Tags