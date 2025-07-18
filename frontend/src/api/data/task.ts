export default interface Task {
    id: number;
    title: string;
    description: string;
    status: 'pending' | 'done';
}