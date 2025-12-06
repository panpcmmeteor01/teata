import { AsdaWhereInput } from "./AsdaWhereInput";
import { AsdaOrderByInput } from "./AsdaOrderByInput";

export type AsdaFindManyArgs = {
  where?: AsdaWhereInput;
  orderBy?: Array<AsdaOrderByInput>;
  skip?: number;
  take?: number;
};
