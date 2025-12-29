function handleClick (e) {
    let id = e.target.parentElement.id
    location.href = "/"+id
}

export default handleClick
