import * as Yup from 'yup'
import MyButton from '../../components/myButton/MyButton'
import style from './lesson13.module.css'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'


interface IFormValue {
  model:string
  creator: string
  email: string
}

const schema = Yup.object().shape({
model: Yup.number().typeError('model должен быть числовым значением').required('model is required').integer('model is integer').min(100, 'model is more then 100').max(1000,'model is less then 1000'),
creator: Yup.string().required('creator is required'),
email: Yup.string().email('incorrect email format').max(50,'email is too long').required('is required')

})

export default function Lesson13() {
  const formik = useFormik({
    initialValues:{model:'',creator:'',email:''} as IFormValue,validateOnChange:false, validationSchema:schema,
    onSubmit:(values:IFormValue,{resetForm})=>{
      console.log(values);
      resetForm()
      
    }
  })


  return (
    <div className='lesson'>
      <h2>Lesson 13: YUP-библиотека</h2>
      <p>robot Form</p>
      <form onSubmit={formik.handleSubmit} className={style.form} action="">
        <input value={formik.values.model} onChange={formik.handleChange} name='model' type="text" placeholder='robot model'/>
        <span className={style.errorMassege}>{formik.errors.model}</span>
        <input value={formik.values.creator} onChange={formik.handleChange} name='creator' type="text"  placeholder='creator name'/>
        <span className={style.errorMassege}>{formik.errors.creator} </span>
        <input value={formik.values.email} onChange={formik.handleChange} name='email' type="text" placeholder='email'/>
        <span className={style.errorMassege}>{formik.errors.email}</span>

        <MyButton text='Send' type='submit'/>
        <Link to={'4'}>anywhere </Link>
      </form>
      
     
     


    </div>
  )
}
