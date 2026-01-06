import Host from '../Host/Host'
import './Style.css'

function HostContainer({content}){
    return(
        <Host
        host={content}
        />
    )
}

export default HostContainer