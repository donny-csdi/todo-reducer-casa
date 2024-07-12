import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const passwordSchema = yup.object({
  password: yup.string().required("Password wajib diisi!"),
  confirmPassword: yup
    .string()
    .required("Confirm Password wajib diisi!")
    .oneOf([yup.ref("password")], "Confirm Password tidak sama!"),
});

export const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <section className="password__form mb-10">
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
        <p className="flex mt-5">Password</p>
        <div>
          <input
            type="password"
            className="border border-black py-1 rounded px-3 bg-slate-500 w-full"
            {...register("password")}
          />
          <p className="text-red-400 text-sm">{errors.password?.message}</p>
        </div>
        <div>
          <input
            type="password"
            className="border border-black py-1 rounded px-3 bg-slate-500 w-full"
            {...register("confirmPassword")}
          />
          <p className="text-red-400 text-sm">
            {errors.confirmPassword?.message}
          </p>
        </div>
        <button className="bg-black text-white px-5 py-1 rounded">Login</button>
      </form>
    </section>
  );
};
