interface IProps {
  name: string;
}

function Tab({ name }: IProps) {
  return <div className="p-2 border cursor-pointer">{name}</div>;
}

export default Tab;
