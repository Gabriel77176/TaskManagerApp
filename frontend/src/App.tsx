import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const queryClient = new QueryClient();

const App: React.FC = () => {
    const [showForm, setShowForm] = React.useState(false);

    return (
        <QueryClientProvider client={queryClient}>
            <div className="app">
                <header className="app-header">
                    <div className="header-content">
                        <h1>Task Manager</h1>
                        <button
                            className="add-task-button"
                            onClick={() => setShowForm(true)}
                        >
                            Add Task
                        </button>
                    </div>
                </header>

                <main className="main-content">
                    <TaskList />
                </main>

                {showForm && <TaskForm onClose={() => setShowForm(false)} />}
            </div>
        </QueryClientProvider>
    );
};

export default App;