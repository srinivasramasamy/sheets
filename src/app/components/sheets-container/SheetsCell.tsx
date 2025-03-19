interface IProps {
  value: string;
}

function SheetsCell({ value }: IProps) {
  return <div className="border p-2">{value}</div>;
}

export default SheetsCell;
