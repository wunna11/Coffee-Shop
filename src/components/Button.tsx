type Props = {
  title: string,
  type?: 'submit' | 'reset' | 'button' | undefined,
  onClick?: () => void,
}

function Button(props: Props) {

  const { title, onClick, type } = props;
  return (
    <button
      className="p-2 border rounded-lg bg-primary font-bold text-center text-white"
      onClick={onClick}
      type={type}
    >{title}</button>
  )
}

export default Button;