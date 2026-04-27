"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log('use form', useForm());
    console.log('register', register('password'), errors)


    const handleLogin = (data) => {
        console.log(data)
    }



    return (
        <section className="container mx-auto px-5 md:px-8 lg:px-12 py-6 rounded-sm bg-zinc-200 min-h-[80vh] flex justify-center items-center">

            <div className="bg-base-100 p-5 md:p-6 space-y-4 md:space-y-6 rounded-sm w-full sm:w-auto">
                <h2 className="text-2xl md:text-3xl font-semibold text-center">Login your account</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset  border-base-300 p-4 md:p-6 rounded-box sm:w-sm border">
                        <label className="label font-semibold text-base">Email</label>
                        <input  type="email" className="input w-full bg-zinc-100" placeholder="Email"
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
                            type="password"
                            className="input w-full bg-zinc-100" placeholder="Password"
                            {...register('password', {
                                required: 'This field is required',
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters or longer"
                                }
                            })} />
                        {errors.password &&
                            <p className="text-red-500">{errors.password.message}</p>}

                        <button className="btn btn-neutral my-4">Login</button>
                        <p className="text-center text-sm">Dont Have An Account? <Link className="text-red-500" href={'/register'}>Register</Link></p>
                    </fieldset>
                </form>

            </div>
        </section>
    );
};

export default LoginPage;