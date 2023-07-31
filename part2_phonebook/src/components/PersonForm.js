const PersonForm = ({ newName, newNumber, handleNameChange, handleNumbChange, addPerson }) => {
    return (
        <form>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumbChange} />
            </div>
            <button type="submit" onClick={addPerson}>add</button>
        </form>
    )
}

export default PersonForm