"use client"
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const route = useRouter();
    const [isShowPassword, setShowPassword] = useState(false);


    const handleRegister = async (userData) => {

        const { name, image, email, password } = userData;
        const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            image: image,
            password: password

        }, {
            onSuccess: () => {
                route.push('/')
            }
        });

        if (data) {
            alert('signUp successfully')
        }
        if (error) {
            alert(error.message)
        }


        console.log('singUp', data, error)
        console.log(userData)
    }



    return (
        <section className="container mx-auto px-5 md:px-8 lg:px-12 py-6 rounded-sm bg-zinc-200 min-h-[80vh] flex justify-center items-center">

            <div className="bg-base-100 p-5 space-y-4 md:space-y-6 rounded-sm w-full sm:w-auto">
                <h2 className="text-2xl md:text-3xl font-semibold text-center">Register your account</h2>

                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset  border-base-300 p-4 rounded-box sm:w-sm border relative">

                        <label className="label font-semibold text-base">Your Name</label>
                        <input type="text" className="input w-full bg-zinc-100" placeholder="Enter Your Name"
                            {...register('name', {
                                required: 'This field is required',
                                minLength: {
                                    value: 3,
                                    message: "name must be at least 3 characters or longer"
                                }
                            })} />
                        {errors.name &&
                            <p className="text-red-500">{errors.name.message}</p>}


                        <label className="label font-semibold text-base">Photo URL </label>
                        <input type="text" className="input w-full bg-zinc-100" placeholder="Enter Your Photo URL"
                            {...register('photo', {
                                required: 'This field is required',
                            })} />
                        {errors.photo &&
                            <p className="text-red-500">{errors.photo.message}</p>}
                        <label className="label font-semibold text-base">Email</label>
                        <input type="email" className="input w-full bg-zinc-100" placeholder="Enter Your Email"
                            {...register('email', {
                                required: 'This field is required',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Invalid email format"
                                }
                            })} />
                        {errors.email &&
                            <p className="text-red-500">{errors.email.message}</p>}


                        <label className="label font-semibold text-base">Password</label>
                        <input
                            type={isShowPassword ? 'text': "password"}
                            className="input w-full bg-zinc-100" placeholder="Enter Your Password"
                            {...register('password', {
                                required: 'This field is required',
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters or longer"
                                }
                            })} />
                        <span className="absolute bottom-[26%] right-6"
                            onClick={() => {
                                setShowPassword(!isShowPassword)
                            }}>
                            {isShowPassword ? <FaEye className="text-base" /> : <FaEyeSlash className="text-base" />}
                        </span>
                        {errors.password &&
                            <p className="text-red-500">{errors.password.message}</p>}

                        <button className="btn btn-neutral my-4">Register</button>
                    </fieldset>
                </form>

            </div>
        </section>
    );
};

export default RegisterPage;