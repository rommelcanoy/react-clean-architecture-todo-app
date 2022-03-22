// TYPESCRIPT OBJECT TYPE CHECKING
interface PersonProps {
  name: {
    first: string
    last: string
  }
}
const Person = (props: PersonProps) => {
  const {name} = props;
  return (
    <div>Hello {name.first} {name.last}</div>
  );
}

export default Person