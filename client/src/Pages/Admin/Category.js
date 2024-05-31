import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_admin_category,
  delete_admin_category,
  get_admin_job_category,
} from "../../redux/actions/adminAction";
import UpdateCategory from "./UpdateCategory";

const Category = () => {
  const { category } = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_admin_job_category());
  }, []);
  const [categoryJobName, setCategoryJobName] = useState("");
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const handleChange = (e) => {
    setCategoryJobName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(add_admin_category({ category: categoryJobName }));
  };
  const handleShow = () => {
    setShow(!show);
  };
  const handleDelete = (id) => {
    dispatch(delete_admin_category(id));
  };
  return (
    <div class="category-container">
      <h2>Add Category</h2>
      <input
        type="text"
        value={categoryJobName}
        onChange={handleChange}
        placeholder="Enter category name"
      />
      <button onClick={handleSubmit}>Add Category</button>

      <h2>Category List</h2>
      <ul>
        {category?.map((cat, index) => (
          <li key={index}>
            {cat.jobName}
            <button
              onClick={() => {
                setId(cat._id);
                handleShow();
              }}
            >
              Update
            </button>
            <button onClick={() => handleDelete(cat._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <UpdateCategory handleShow={handleShow} show={show} id={id} />
    </div>
  );
};

export default Category;
