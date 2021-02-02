import { FC } from "react";
import { useForm } from "react-hook-form";
import "./form.css";

interface IFormInputs {
  firstName: string;
  lastName: string;
}

const Form: FC = () => {
  const { register, handleSubmit, reset, errors } = useForm<IFormInputs>();
  const onSubmit = (data: IFormInputs) => {
    alert(JSON.stringify(data));
    reset(); // 폼의 값 에러 리셋
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" ref={register({ required: true })} />
        {errors.firstName && "First name is required"}
        <input name="lastName" ref={register({ required: true })} />
        {errors.lastName && "Last name is required"}

        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
