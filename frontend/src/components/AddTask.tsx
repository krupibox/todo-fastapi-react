import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createTask } from '../api';

const AddTask: React.FC = () => {
    const [title, setTitle] = useState('');
    const queryClient = useQueryClient();

    const mutation = useMutation(createTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
            setTitle('');
        },
    });

    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={() => mutation.mutate(title)}>Добавить</button>
        </div>
    );
};

export default AddTask;