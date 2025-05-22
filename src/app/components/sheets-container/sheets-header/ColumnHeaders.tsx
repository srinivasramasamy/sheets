import { columnHeaders } from "@/app/utility/headerUtility";

interface IProps {
  length: number;
}

function ColumnHeaders({ length }: IProps) {
  return (
    <div id="column-headers" className="flex">
      {columnHeaders(length).map((header, cellIndex) => (
        <div
          className="border p-2 w-20 h-7 flex-grow-0 flex-shrink-0 flex items-center justify-center text-xs text-gray-500"
          key={cellIndex}
        >
          {header}
        </div>
      ))}
    </div>
  );
}

export default ColumnHeaders;
