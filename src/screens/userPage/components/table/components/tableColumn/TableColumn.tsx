import { TableQuality } from "../../../../../../types";
import CloseIcon from "@mui/icons-material/Close";
import "./table-column.css";

type Props = {
  title: string;
  qualities: TableQuality[];
};

export const TableColumn = ({ title, qualities }: Props) => {
  //const deleteQuality = (id: number) => {
  // try {
  //     } catch (error) {

  //     }

  return (
    <div className="user-page-table-column">
      <div className="user-page-table-column-title">{title}</div>

      {qualities.map((quality) => (
        <div key={quality.id} className="user-page-table-column-item">
          <div>{quality.text} </div>
          <div>
            <CloseIcon color="error" />
          </div>
        </div>
      ))}
    </div>
  );
};
