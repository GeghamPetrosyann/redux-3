import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { addUser } from './users/users.api';

export default function AddUser() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const onSubmit = (data) => {
        dispatch(addUser(data));
        navigate("/")
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="salary">Salary:</label>
                <input
                    id="salary"
                    type="text"
                    {...register('salary', {
                        required: 'Salary is required',
                        pattern: {
                            value: /^\d+$/,
                            message: 'Salary must be a valid number',
                        },
                    })}
                />
                {errors.salary && <p>{errors.salary.message}</p>}
            </div>

            <button type="submit">Add</button>
        </form>
    );
}
