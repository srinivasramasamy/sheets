import Cell from "@/app/types/Cell";

interface IProps {
  cell: Cell;
}

function SheetsCell({ cell }: IProps) {
  return (
    <div className="border p-2 w-20 h-7 flex-grow-0 flex-shrink-0">
      {cell.value}
    </div>
  );
}

export default SheetsCell;
