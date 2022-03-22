// TYPESCRIPT BASIC TYPE CHECKING
interface GreetProps {
  name: string,
  messageCount: number,
  isLoggedIn: boolean,
}

const Greet = (props: GreetProps) => {
  const { name, messageCount, isLoggedIn } = props;
  return (
    <div>
      {isLoggedIn ? `Hello ${name}! You have ${messageCount} messages!` : 'Welcome Guest'}
    </div>
  )

}

export default Greet