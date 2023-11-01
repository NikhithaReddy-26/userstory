import { moreinfo, rows } from "../../../utils/constants/constants";
import { CandidateDataTable } from "../CandidateDataTable";

export const CandidateInfo = () => {
  return <CandidateDataTable rows={rows} moreinfo={moreinfo} />;
};
