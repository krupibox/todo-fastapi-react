import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App: React.FC = () => {
    return (
        <div>
            <AddTask />
            <TaskList />
        </div>
    );
};

export default App;