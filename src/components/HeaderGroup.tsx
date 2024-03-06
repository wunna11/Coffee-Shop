import { Link } from "react-router-dom";
import Header from "./Header";

type Props = {
  title: string
}

function HeaderGroup(props: Props) {
  const { title } = props;
  return (
    <div className="flex justify-between">
      <Header title={title} />
        <Link to="/products" className="text-md">See All</Link>
      </div>
  );
}

export default HeaderGroup;
