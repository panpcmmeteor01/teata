import { Asda as TAsda } from "../api/asda/Asda";

export const ASDA_TITLE_FIELD = "firstName";

export const AsdaTitle = (record: TAsda): string => {
  return record.firstName?.toString() || String(record.id);
};
