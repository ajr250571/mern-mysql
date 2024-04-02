import { Formik } from "formik";
import { createTask } from "../api/tasks.api";

const TaskForm = () => (
  <div className="flex h-[calc(100vh-5rem)] justify-center items-center">
    <Formik
      initialValues={{ title: "", description: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Title Required";
        }
        if (!values.description) {
          errors.description = "Description Required";
        }
        return errors;
      }}
      onSubmit={async (values, actions) => {
        try {
          const res = await createTask(values);
          console.log(res);
          actions.resetForm();
        } catch (error) {
          console.error(error);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className="flex flex-col gap-2 w-80" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-4">Task</h1>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            placeholder="Title"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <p className="text-error text-xs">
            {errors.title && touched.title && errors.title}
          </p>

          <input
            type="text"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            placeholder="Description"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <p className="text-error text-xs">
            {errors.description && touched.description && errors.description}
          </p>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default TaskForm;
