"use client";

import { FormInputPost } from "@/types";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
    submit: SubmitHandler<FormInputPost>
}

const ForumPost: FC<FormPostProps> = ({ submit }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center justify-center gap-3 mt-8">
      <input
        type="text"
        placeholder="Post title..."
        className="input input-bordered w-full max-w-lg"
        {...register("title", {required:true})}
      />
      <textarea
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post content..."
        {...register("content", {required:true})}
      ></textarea>
      <select
        className="select select-bordered w-full max-w-lg"
        defaultValue=''
        {...register("tag", {required:true})}
      >
        <option disabled value={""}>
          Select tags..
        </option>
        <option>REACT</option>
        <option>ANGULAR</option>
        <option>NEXT.js</option>

      </select>

      <button type="submit" className="btn btn-primary w-full max-w-lg">Create post</button>
    </form>
  );
};

export default ForumPost;
