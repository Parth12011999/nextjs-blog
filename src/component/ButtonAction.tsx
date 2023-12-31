import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

const ButtonAction = () => {
  return (
    <div>
      <Link href={"/edit/id"} className="btn btn-primary inline-block" style={{marginRight:'10px'}}>
        {" "}
        <Pencil />
        Edit
      </Link>
      <button className="btn btn-error ms-2">
        <Trash />
        Delete
      </button>
    </div>
  );
};

export default ButtonAction;
