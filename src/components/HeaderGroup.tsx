import Header from "./Header";

type Props = {
  title: string
}

function HeaderGroup(props: Props) {
  const { title } = props;
  return (
    <div className="flex justify-between">
      <Header title={title} />
        <a href="/products" className="text-md">See All</a>
      </div>
  );
}

export default HeaderGroup;
