import './Style.css'

function Tags ({tags}) {
    console.log(tags.length)
    return(
        <div className='tags'>
            {label(tags)}
        </div>
    )
}

function label(e){
    e.forEach(element => {
    console.log(element)
    return(
        <p className='tag'>
            {element}
        </p>
    )   
})}
export default Tags