export default interface NewTask {
    title: string;
    description: string;
    status: 'pending' | 'done';
}