import { FC } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Field from "./field";
type Inputs = {
  name: string;
  category: string;
  location: string;
  image: FileList;
};
const ToolForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<Inputs>();
  // todo refactor this a libary (look into lodash for this type of utility function)

  const getFormData = (object: Inputs): FormData =>
    Object.keys(object).reduce((formData, key) => {
      console.log({ object });
      formData.append(key, object[key as keyof object]);
      return formData;
    }, new FormData());

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = getFormData(data);
    console.log(formData.entries());

    // * dummy post request
    // const res = await fetch("http://localhost:5000/upload-file", {
    //   method: "POST",
    //   body: formData,
    // }).then((res) => res.json());
    // alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };
  console.log({ watch, errors });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Field htmlFor="text" label="Name" error={errors.name}>
        <input
          type="text"
          className="grow"
          placeholder="name"
          {...register("name", { required: true, minLength: 4 })}
        />
      </Field>

      <Field htmlFor="text" label="Category" error={errors.category}>
        <input
          type="text"
          className="grow"
          placeholder="category"
          {...register("category", { required: true, minLength: 4 })}
        />
      </Field>

      <Field htmlFor="text" label="Location" error={errors.location}>
        <input
          type="text"
          className="grow"
          placeholder="place/box number"
          {...register("location", { required: true, minLength: 3 })}
        />
      </Field>
      {/*  */}
      <Field htmlFor="file" label="upload image" error={errors.image}>
        <Controller
          control={control}
          name={"image"}
          rules={{ required: "Recipe picture is required" }}
          render={({ field: { value, onChange, ...field } }) => {
            return (
              <input
                {...field}
                value={value?.fileName}
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  onChange(event.target.files[0]);
                }}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                id="image"
                name="image"
              />
            );
          }}
        />
      </Field>
      <button className="w-32 btn btn-primary rounded" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ToolForm;
