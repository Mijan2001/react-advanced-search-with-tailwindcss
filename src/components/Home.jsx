import React, { useState } from 'react';

const Home = () => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        contact: '',
        gender: '',
        subject: '',
        resume: '',
        url: '',
        about: ''
    });

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: [e.target.value]
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setValues({
            firstname: '',
            lastname: '',
            email: '',
            contact: '',
            gender: '',
            subject: '',
            resume: '',
            url: '',
            about: ''
        });
        console.log('firstname : ', values.firstname);
        console.log('lastname : ', values.lastname);
        console.log('email : ', values.email);
        console.log('contact : ', values.contact);
    };
    console.log('gender : ', values.gender);
    console.log('subject : ', values.subject);

    return (
        <div className="flex justify-center m-5">
            <div className="bg-slate-400 rounded-md">
                <h1 className="text-center text-3xl">Form in React</h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 py-5 px-10 shadow-md rounded-md"
                >
                    <div className="flex flex-col">
                        <label htmlFor="firstname" className="text-yellow-100">
                            First Name
                        </label>
                        <input
                            onChange={handleChange}
                            value={values.firstname}
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="Enter First Name"
                            className="p-2 rounded-md  focus:border-[1px] outline-none focus:border-gray-900 bg-slate-500 text-white"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="lastname" className="text-yellow-100">
                            Last Name
                        </label>
                        <input
                            onChange={handleChange}
                            value={values.lastname}
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Enter Last Name"
                            className="p-2 rounded-md  focus:border-[1px] outline-none focus:border-gray-900 bg-slate-500 text-white"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-yellow-100">
                            Email
                        </label>
                        <input
                            onChange={handleChange}
                            value={values.email}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            className="p-2 rounded-md  focus:border-[1px] outline-none focus:border-gray-900 bg-slate-500 text-white"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="contact" className="text-yellow-100">
                            Contact
                        </label>
                        <input
                            onChange={handleChange}
                            value={values.contact}
                            type="text"
                            id="contact"
                            name="contact"
                            placeholder="Enter Phone Number"
                            className="p-2 rounded-md  focus:border-[1px] outline-none focus:border-gray-900 bg-slate-500 text-white"
                        />
                    </div>

                    <div className="flex gap-10">
                        <label htmlFor="gender" className="text-yellow-100">
                            Gender
                        </label>
                        <span>
                            <input
                                onChange={handleChange}
                                value="male"
                                type="radio"
                                name="gender"
                                id="gender"
                            />{' '}
                            Male
                        </span>
                        <span>
                            <input
                                onChange={handleChange}
                                value="female"
                                type="radio"
                                name="gender"
                                id="gender"
                            />{' '}
                            Female
                        </span>
                        <span>
                            <input
                                onChange={handleChange}
                                value="other"
                                type="radio"
                                name="gender"
                                id="gender"
                            />{' '}
                            Other
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="subject" className="text-yellow-100">
                            Subject
                        </label>
                        <select
                            onChange={handleChange}
                            value={values.subject}
                            name="subject"
                            id="subject"
                            className="p-2 rounded-md  focus:border-[1px] outline-none focus:border-gray-900 bg-slate-500 text-white"
                        >
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                            <option value="ME">ME</option>
                            <option value="CE">CE</option>
                            <option value="EEE">EEE</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="resume" className="text-yellow-100">
                            Resume
                        </label>
                        <input
                            onChange={handleChange}
                            value={values.resume}
                            type="file"
                            id="resume"
                            name="resume"
                            accept="application/pdf"
                            placeholder="Select Resume"
                            className="p-2 rounded-md  focus:border-[1px] outline-none focus:border-gray-900 bg-slate-500 text-white"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="url" className="text-yellow-100">
                            URL
                        </label>
                        <input
                            onChange={handleChange}
                            value={values.url}
                            type="url"
                            id="url"
                            name="url"
                            placeholder="Enter Image URL"
                            className="p-2 rounded-md  focus:border-[1px] outline-none focus:border-gray-900 bg-slate-500 text-white"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="about" className="text-yellow-100">
                            About
                        </label>
                        <textarea
                            onChange={handleChange}
                            value={values.about}
                            id="about"
                            name="about"
                            placeholder="Enter Description"
                            cols={30}
                            rows={10}
                            className="p-2 rounded-md  focus:border-[1px] outline-none focus:border-gray-900 bg-slate-500 text-white"
                        ></textarea>
                    </div>

                    <div className="flex flex-row justify-around">
                        <button
                            type="reset"
                            className="bg-blue-600 rounded-md px-5 py-2 text-white hover:bg-blue-700"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="bg-yellow-200 rounded-md px-5 py-2 text-black hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;
