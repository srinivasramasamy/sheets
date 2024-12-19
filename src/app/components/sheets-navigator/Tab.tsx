interface IProps {
  name: string;
}

function Tab({ name }: IProps) {
  return <div>{name}</div>;
}

export default Tab;
