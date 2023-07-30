import Person from './Person'

const Persons = ({ persons, filter }) => {
    const peopleToShow = (filter === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            {console.log(peopleToShow[0])}
            {peopleToShow.map(person =>
                <div key={person.id}>
                    <Person name={person.name} number={person.number} />
                </div>      
            )}
        </div>
    )
}

export default Persons