import { type SchemaTypeDefinition } from "sanity";
import { blockTypes, blocks } from "./schemas/blocks";
import { page } from "./schemas/documents/page";

export const schemaTypes = [
  page,
  blocks,
  ...blockTypes,
] as SchemaTypeDefinition[];

export default schemaTypes;
