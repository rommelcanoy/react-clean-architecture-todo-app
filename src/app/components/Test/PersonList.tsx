// TYPESCRIPT ARRAY TYPE CHECKING
interface PersonListProps {
  names: {
    first: string,
    last: string
  }[]
}

const PersonList = (props: PersonListProps) => {
  const { names } = props;
  return (
    <div>
      {names.map(name => (<h2 key={name.first}>{name.first} {name.last}</h2>))}
    </div >
  )
}

export default PersonList