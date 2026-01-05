import './Style.css'

function Liste ({element}) {
    if (Array.isArray(element) === true){
        element.forEach((e) => {
            console.log(e)
            return(
                <ul>{`${e}`}</ul>
            )
        })
    }else{
        return(
            <ul>{`${element}`}</ul>
        )
    }
}
export default Liste