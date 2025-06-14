import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTask } from '../api/endpoint/createTask';
import type NewTask from "../api/data/newTask.ts";

import '../App.css';

const schema = z.object({
    title: z.string().min(1, 'Title required'),
    description: z.string().min(1, 'Description required'),
    status: z.enum(['pending', 'done']),
});

type FormData = z.infer<typeof schema>;

const TaskForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const queryClient = useQueryClient();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: { status: 'pending' },
    });

    const mutation = useMutation({
        mutationFn: (data: NewTask) => createTask(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            reset();
        },
    });

    const onSubmit = (data: FormData) => mutation.mutate(data);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>Create New Task</h2>
                <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="title">Title*</label>
                        <input
                            id="title"
                            {...register('title')}
                            placeholder="Task title"
                            className={errors.title ? 'error-input' : ''}
                        />
                        {errors.title && <span className="error">{errors.title.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description*</label>
                        <textarea
                            id="description"
                            {...register('description')}
                            placeholder="Task description"
                            rows={3}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select id="status" {...register('status')}>
                            <option value="pending">Pending</option>
                            <option value="done">Done</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="submit-button"
                            disabled={mutation.isPending}
                        >
                            {mutation.isPending ? 'Adding...' : 'Add Task'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;