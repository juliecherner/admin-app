import { useContext } from "react";
import { ResponseContext } from "../../../../../../context/response.context";
import { deleteTableQualityById } from "../../../../../../api/table.api";
import { TableQuality } from "../../../../../../types";
import CloseIcon from "@mui/icons-material/Close";
import "./table-column.css";

type Props = {
  title: string;
  qualities: TableQuality[];
};

export const TableColumn = ({ title, qualities }: Props) => {
  const { setAndClearResponse } = useContext(ResponseContext);

  const deleteQuality = async (id: number | undefined) => {
    if (id === undefined) return;
    try {
      const result = await deleteTableQualityById(id);
      setAndClearResponse({ text: result, severity: "success" });
    } catch (error: any) {
      setAndClearResponse({ text: error.message, severity: "error" });
    }
  };

  return (
    <div className="user-page-table-column">
      <div className="user-page-table-column-title">{title}</div>

      {qualities.map((quality) => (
        <div key={quality.id} className="user-page-table-column-item">
          <div>{quality.text} </div>
          <div>
            <CloseIcon
              color="error"
              onClick={() => deleteQuality(quality.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
