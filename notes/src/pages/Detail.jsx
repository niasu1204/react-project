import { useEffect, useState } from "react";
import { getNote } from "../api/notes";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote(id).then(setNote);
  }, []);

  if (!note) return <div>로딩중...</div>;

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>

       <Link to="/">목록으로 이동</Link>
    </div>
  );
}

export default Detail;