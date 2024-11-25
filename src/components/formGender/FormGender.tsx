import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import style from "./formGender.module.css";
import * as Yup from 'yup'

interface IFormGender {
  name: string | undefined;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Не возможно отправить пустую форму').min(2,'должно быть больше 2 символов').matches(/^[A-Z]/, 'Строка должна начинаться с большой буквы')
})

export default function FormGender() {
  const [name, setName] = useState<string | undefined>(undefined);

  const getRandomName = (name: string | undefined) => {
    fetch(`https://api.genderize.io/?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        console.log(data);
        
      });
  };

  

  const formik = useFormik({
    initialValues: { name: ""} as IFormGender, validationSchema:schema, validateOnChange:false,
    onSubmit: (values:IFormGender , { resetForm }) => {
        getRandomName(values.name);
        resetForm();
      },
  });

  return (
    <div>
      <form className={style.formContainer} onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          name="name"
          type="text"
          placeholder='введите имя'
        />
        <MyButton text="Отправить" type="submit"/>
      </form>
      {formik.errors.name &&(<p className={style.errorText}>{formik.errors.name}</p>)}

    </div>
  );
}

