import React from "react";
import { getNoteById } from "@/utils/notes/get";
import Viewer from "@/components/viewer/viewer";

export default async function NotePage({
  params: { id },
}: {
  params: {
    id: number;
  };
}) {
  const { note, sources, errors } = await getNoteById(id);

  console.log(
    "Retrieved Note: ",
    note?.id,
    " | Connected sources: ",
    sources?.length,
    errors
  );

  return (
    <div>
      {note && <Viewer note={note} source={sources ? sources[0] : undefined} />}
    </div>
  );
}
