import React from 'react'
import Task, { TaskAction, TaskType } from '@/components/atoms/Task/Task'
import PropTypes from 'prop-types'

export type TaskListProps = {
    tasks: TaskType[];
    loading?: boolean;
    onPinTask?: TaskAction;
    onArchiveTask?: TaskAction;
}

export default function TaskList(props: TaskListProps) {
    const events = {
        onPintask: props.onPinTask,
        onArchiveTask: props.onArchiveTask,
    };

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    )

    if (props.loading) {
        return (
            <div className="list-items">
                {[...Array(5)].map(_ => LoadingRow)}
            </div>
        )
    }

    if (props.tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        )
    }

    const tasksInOrder = [
        ...props.tasks.filter(t => t.state == 'TASK_PINNED'),
        ...props.tasks.filter(t => t.state !== 'TASK_PINNED'),
    ]
    return (
        <div className="list-items">
            {tasksInOrder.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    )
}

TaskList.propTypes = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    onPinTask: PropTypes.func,
    onArchiveTask: PropTypes.func,
}
TaskList.defaultProps = {
    loading: false,
}