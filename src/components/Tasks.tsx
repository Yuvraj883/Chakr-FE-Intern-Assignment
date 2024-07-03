interface TasksProps {
  tasks: string[];
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return <div>No tasks available</div>;
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </div>
  );
};

export default Tasks;
