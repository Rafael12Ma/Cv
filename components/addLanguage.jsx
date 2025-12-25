"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActionState } from "react";
import toast from "react-hot-toast";

async function addLanguage(langData) {
  const response = await fetch("/api/langu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(langData),
  });

  return response.json();
}

export default function AddLang() {
  const [state, formAction] = useActionState(test, {});

  function test(prevState, formData) {
    const title = formData.get("title");
    const level = formData.get("level");

    mutate({ title, level });
  }

  const queryClient = useQueryClient();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addLanguage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["languages"] });
      toast.success("Language successfully added!");
    },
  });

  let content;
  if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <>
      <form className="flex flex-col gap-5" action={formAction}>
        <label htmlFor="">Language title</label>
        <input required name="title" placeholder="Enter language" type="text" />
        <label htmlFor="">Language level</label>
        <input required name="level" placeholder="Enter level" type="text" />
        <button disabled={isPending} className="cursor-pointer">
          {isPending ? "Saving..." : "Save"}
        </button>
        {content}
      </form>
    </>
  );
}
