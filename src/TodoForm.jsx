import { useForm } from "react-hook-form";

const TodoForm = ({ addTask, isFavorite, isCompleted }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const description = data.description;

    addTask(name, description, isFavorite, isCompleted);

    reset();
  }

  return (
    <>
      <form className="addTask_block" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder='Название'
          className='addTask_input-name'
          {...register("name",
            {
              required: "Название!",
              minLength: {
                value: 2,
                message: "Минимальная длина - 2"
              },
              maxLength: {
                value: 20,
                message: "Максимальная длина - 20"
              }
            })}
        />
        {errors.name && <p className="error-name-message">{errors.name.message}</p>}
        <input
          type="text"
          placeholder='Описание'
          className='addTask_input-description'
          {...register("description",
            {
              maxLength: {
                value: 30,
                message: "Максимальная длина - 30"
              }
            })}
        />
        {errors.description && <p className="error-description-message">{errors.description.message}</p>}
        <button type='submit' className="button"><span>Создать</span></button>
      </form>
    </>
  );
}

export default TodoForm;