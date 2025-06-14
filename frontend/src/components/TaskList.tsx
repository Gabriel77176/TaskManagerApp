import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTasks } from "../api/endpoint/getTasks.ts";
import { deleteTask } from "../api/endpoint/deleteTask.ts";
import { updateTaskStatus } from "../api/endpoint/updateTaskStatus.ts";
import type Task from "../api/data/task.ts";

import '../App.css';

const TaskList: React.FC = () => {
    const queryClient = useQueryClient();
    const { data: tasks, isLoading, error } = useQuery<Task[]>({
        queryKey: ['tasks'],
        queryFn: getTasks,
    });

    const deleteMutation = useMutation({
        mutationFn: (id: number) => deleteTask(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
    });

    const updateStatusMutation = useMutation({
        mutationFn: ({ id, status }: { id: number; status: 'pending' | 'done' }) =>
            updateTaskStatus(id, status),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading tasks</div>;

    return (
        <div className="task-list-container">
            <ul className="task-list">
                {tasks?.map((task) => (
                    <li className="task-item" key={task.id}>
                        <div className="task-content">
                            <div className="task-header">
                                <h3 className="task-title">{task.title}</h3>
                                <span className={`task-status ${task.status}`}>
                  {task.status}
                </span>
                            </div>

                            {task.description && (
                                <p className="task-description">
                                    {task.description}
                                </p>
                            )}
                        </div>

                        <div className="task-actions">
                            <button
                                className={`action-button ${task.status === 'pending' ? 'mark-done' : 'mark-pending'}`}
                                onClick={() => updateStatusMutation.mutate({
                                    id: task.id,
                                    status: task.status === 'pending' ? 'done' : 'pending',
                                })}
                            >
                                {task.status === 'pending' ? 'Mark as Done' : 'Mark as Pending'}
                            </button>

                            <button
                                className="action-button delete-button"
                                onClick={() => deleteMutation.mutate(task.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;