import Row from "@/app/types/Row";
import SheetsCell from "./SheetsCell";

interface IProps {
  row: Row;
}

function SheetsRow({ row }: IProps) {
  return (
    <div className="flex">
      {row.cells.map((cell, cellIndex) => (
        <SheetsCell key={cellIndex} value={cell.value} />
      ))}
    </div>
  );
}

export default SheetsRow;
