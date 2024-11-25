import React from "react";
import MyButton from "../../components/myButton/MyButton";
import style from "./lesson12.module.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Lesson12() {

    const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    } as IFormValues,
    onSubmit: (values:IFormValues,{resetForm}) => {
        resetForm()
        console.log(values);
        navigate('/')

    },
  });
  return (
    <div className="lesson-container">
      <h2>библиотека FORMIK</h2>
      <p>Formik - это библиотека для удобной работы с формами</p>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <input onChange={formik.handleChange} value={formik.values.firstName} name="firstName" type="text" placeholder="имя" />
        <input onChange={formik.handleChange} value={formik.values.lastName} name="lastName" type="text" placeholder="фамилия" />
        <input onChange={formik.handleChange} value={formik.values.email} name="email" type="email" placeholder="e-mail" />
        <MyButton text="Отправить" type="submit" />
      </form>
      <h3 style={{ marginTop: '15px' }}>Что нужно сделать чтобы форма заработала:</h3>
      <ol>
        <li>Установили formik через 'npm i formik'</li>
        <li>Создали переменную formik в которую присвоили результат вызова функции useFormik() с настройками в объекте</li>
        <li>В объекте два обязательных ключа: initialValues (начальные значения), onSubmit (функция, которая вызовется при нажатии на кнопку в форме)</li>
        <li>Для form добавляем в onSubmit formik.handleSubmit</li>
        <li>Для input добавляем в onChange formik.handleChange</li>
        <li>Для input в value добавляем его значение через formik.values</li>
        <li>Для input в поле name должен быть тот же ключ, что и в initialValues</li>
      </ol>
    </div>
  );
}
