function Folder(props) {
    
    return(
        <li key={props.id}>
            <a href="#" >{props.name}</a>
        </li>
    )

}

export default Folder