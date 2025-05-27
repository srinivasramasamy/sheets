import Row from "@/app/types/Row";
import SheetsCell from "./SheetsCell";

interface IProps {
  row: Row;
}

function SheetsRow({ row }: IProps) {
  return (
    <div className="flex">
      {row.cells.map((cell) => (
        <SheetsCell key={cell.columnIndex} cell={cell} />
      ))}
    </div>
  );
}

export default SheetsRow;
