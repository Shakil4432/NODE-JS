import React, { useContext, useState } from 'react'
import { authContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';

export default function Registration() {
    const {createUser} = useContext(authContext);
    const {success, setSuccess} = useState(null);
    const {RegistrationError, setRegistrationError} = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';
    console.log(navigate)
    console.log(location)

    const handleSubmit = (event)=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const imgURL = form.imgURL.value;
        const password = form.password.value;

        const user={name,email,imgURL,password};

        if (password.length < 6) {
            return toast.error('Password Should be 6 chartacters or longer');
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('Password should have at least one uppercase chartacter')
        }
        else if (!/[a-z]/.test(password)) {
            return toast.error('Password should have at least one lowercase character')
        }


        createUser(email, password)
        .then(result=>{
            updateProfile(result.user, {
                displayName:name,
                photoURL: imgURL
            })
            .then(()=>{
                navigate(from)
            })
            return toast.success('user created successfully');
        })
        .catch(error=>{
            setRegistrationError(error.message)
            return toast.error(error.code);
        })
        
    }
    return (
        <div>
            <div onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <h1 className='text-4xl font-bold text-center'>Registration Form</h1>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ImgURL</span>
                                </label>
                                <input type="text" placeholder="ImgURL" name='imgURL' className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
