export interface Task {
    id: number;
    title: string;
    description: string;
    status: 'pending' | 'done';
}

export function buildTask(title: string, description: string, statusEnum: 'pending' | 'done'): Task {
    return {
        id: Date.now(),
        title: title,
        description: description,
        status: statusEnum
    };
}