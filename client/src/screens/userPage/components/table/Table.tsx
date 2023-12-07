import { useState, useEffect, useContext } from "react";
import { ResponseContext } from "../../../../context/response.context";
import { TableQuality } from "../../../../types";
import { allUserTableQualities } from "../../../../api/table.api";
import { TableColumn } from "./components/tableColumn/TableColumn";
import { NewTableQuality } from "./components/newTableQuality/NewTableQuality";
import "./table.css";

type Props = {
  userId: string | undefined;
};

export const Table = ({ userId }: Props) => {
  const { setAndClearResponse } = useContext(ResponseContext);
  const [tableQualities, setTableQualities] = useState<TableQuality[]>([]);

  const getTableQualities = async () => {
    if (userId === undefined) return;
    try {
      const all = await allUserTableQualities(parseInt(userId));
      setTableQualities(all);
    } catch (error: any) {
      setAndClearResponse(error.message);
    }
  };

  const displayQualities = (title: string): TableQuality[] => {
    const newList = tableQualities.filter((quality) => quality.type === title);
    return newList;
  };

  useEffect(() => {
    getTableQualities();
  }, [tableQualities]);

  return (
    <div>
      {!tableQualities.length ? (
        <div> No qualities are found</div>
      ) : (
        <div className="user-page-table-content">
          <TableColumn title="pros" qualities={displayQualities("pros")} />
          <TableColumn title="cons" qualities={displayQualities("cons")} />
        </div>
      )}
      <NewTableQuality userId={userId} />
    </div>
  );
};
