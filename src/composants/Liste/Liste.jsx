import './Style.css'

function Liste({ element }) {
  if (Array.isArray(element)) {
    return (
      <ul>
        {element.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    )
  }

  return (
    <ul>
      <li>{element}</li>
    </ul>
  )
}

export default Liste