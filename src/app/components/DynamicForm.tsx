import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";

const dynamicSchema = yup.object({
  data: yup
    .array()
    .of(
      yup.object().shape({
        text: yup.string().required(),
      })
    )
    .min(1),
});

function DynamicForm() {
  const { control, register, handleSubmit } = useForm({
    resolver: yupResolver(dynamicSchema),
    defaultValues: {
      data: [{ text: "" }],
    },
  });

  const { fields, append } = useFieldArray({ control, name: "data" });

  const onSubmit = (data: any) => console.log(data);

  return (
    <section className="dynamic__form mb-18">
      <div className="space-y-3">
        {fields.map((field, index) => (
          <div key={index}>
            <input
              {...register(`data.${index}.text`)}
              type={"text"}
              className="border border-black py-1 rounded px-3 bg-slate-500 w-full"
            />
          </div>
        ))}
        <button
          className="bg-black text-white px-5 py-1 rounded"
          onClick={() => {
            append({ text: "" });
          }}
        >
          Add
        </button>
        <button
          className="bg-black text-white px-5 py-1 rounded ms-3"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </div>
    </section>
  );
}

export default DynamicForm;
