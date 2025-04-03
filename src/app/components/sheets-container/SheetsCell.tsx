interface IProps {
  value: string;
}

function SheetsCell({ value }: IProps) {
  return (
    <div className="border p-2 w-20 h-7 flex-grow-0 flex-shrink-0">{value}</div>
  );
}

export default SheetsCell;
