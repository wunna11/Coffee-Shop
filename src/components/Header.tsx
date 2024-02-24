type Props = {
  title: string
}

function Header(props: Props) {
  const { title } = props;
  return (
    <h1 className="text-xl text-gray-950 font-bold">{title}</h1>
  )
}

export default Header;