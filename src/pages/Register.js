import {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import {FormRow, Logo} from '../components';
import Wrapper from "../assets/wrappers/RegisterPage";
import { loginUser } from "../features/user/userSlice";
import { registerUser } from "../features/user/userSlice";

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState);
    const {user, isLoading} = useSelector(store => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]:value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const {name, email, password, isMember} = values;
        if(!email || !password || (!isMember && !name)) {
            toast.error('Please fill Out All Fields');
            return;
        }
        if(isMember) {
            dispatch(loginUser({email:email, password:password}));
            return;
        }
        dispatch(registerUser({name, email, password}))
    }

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

    useEffect(() => {
        if(user){
            setTimeout(()=>{
                navigate('/');
            }, 3000)
        }
    }, [user])

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo/>
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {/*name field*/}
                {!values.isMember && (
                    <FormRow type='text' name='name' value={values.name} handleChange={handleChange}/> //useForm (popatrzeć) / formik (popatrzeć) / walidacja yup (popatrzeć)
                )}
                {/*email field*/}
                <FormRow type='email' name='email' value={values.email} handleChange={handleChange}/>
                {/*password field*/}
                <FormRow type='password' name='password' value={values.password} handleChange={handleChange}/>
                <button
                    type='submit'
                    className="btn btn-block"
                    disabled={isLoading}>{isLoading ? 'loading...' : 'submit'}</button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button type='button' onClick={toggleMember} className='member-btn'>{values.isMember ? 'Register' : 'Login'}</button>
                </p>
            </form>
        </Wrapper>
    );
};

export default Register;