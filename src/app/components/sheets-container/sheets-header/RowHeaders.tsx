import { rowHeaders } from "@/app/utility/headerUtility";

interface IProps {
  length: number;
}

function RowHeaders({ length }: IProps) {
  return (
    <div id="row-headers" className="flex flex-col">
      {rowHeaders(length).map((header, cellIndex) => (
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

export default RowHeaders;
