const Person = ({ name, number, del }) => {
    const check = () => {
        if(window.confirm(`Delete ${name} ?`)) {
            del()
        }
        return
    }
    
    return (
        <div>
            {name} {number}
            <button onClick={check}>delete</button>
        </div>
    )
}

export default Person