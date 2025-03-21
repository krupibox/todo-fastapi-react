import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getTasks, deleteTask } from '../api';

const TaskList: React.FC = () => {
    const queryClient = useQueryClient();

    const { data: tasks } = useQuery('tasks', getTasks);

    const deleteMutation = useMutation(deleteTask, {
        onSuccess: () => queryClient.invalidateQueries('tasks'),
    });

    return (
        <ul>
            {tasks?.map((task) => (
                <li key={task.id}>
                    {task.title}
                    <button onClick={() => deleteMutation.mutate(task.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;