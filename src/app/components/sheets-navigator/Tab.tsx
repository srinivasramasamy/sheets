interface IProps {
  name: string;
  onClick: () => void;
}

function Tab({ name, onClick }: IProps) {
  return (
    <div
      id={name + "-tab"}
      className="p-2 border cursor-pointer"
      onClick={onClick}
    >
      {name}
    </div>
  );
}

export default Tab;
