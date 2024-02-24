import { type SchemaTypeDefinition } from "sanity";
import { blockTypes, blocks } from "./schemas/blocks";
import { page } from "./schemas/documents/page";
import { frontpage } from "./schemas/documents/front-page";

export const schemaTypes = [
  page,
  frontpage,
  blocks,
  ...blockTypes,
] as SchemaTypeDefinition[];

export default schemaTypes;
