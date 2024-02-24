import type { SanityDocument } from "next-sanity";
import type {
  StructureBuilder,
  StructureResolverContext,
  View,
  ViewBuilder,
} from "sanity/structure";
import { linkableSchemaTypes } from "./variables";

export const structure = (
  S: StructureBuilder,
  context: StructureResolverContext
) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        // .icon(RxFile)
        .child(
          S.documentList()
            .title("Pages")
            .filter(`_type in $documentTypes`)
            .params({
              documentTypes: ["page", "frontpage"],
            })
        ),
    ]);

export const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title?: string
) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(
      S.document()
        .schemaType(typeName)
        .documentId(typeName)
        .title(title || typeName)
    );
