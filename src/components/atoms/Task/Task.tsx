import React from 'react'
import PropTypes from 'prop-types'

export type TaskType = {
    id: string;
    title: string;
    state: string;
    updatedAt: Date;
}

export type TaskAction = (id: TaskType['id']) => void

export type TaskProps = {
    task: TaskType;
    onArchiveTask?: TaskAction;
    onPinTask?: TaskAction;
}

export default function Task(props: TaskProps) {
    return (
        <div className={`list-item ${props.task.state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={props.task.state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span className="checkbox-custom" onClick={() => props.onArchiveTask && props.onArchiveTask(props.task.id)} />
            </label>
            <div className="title">
                <input type="text" value={props.task.title} readOnly={true} placeholder="Input title" />
            </div>

            <div className="actions" onClick={event => event.stopPropagation()}>
                {props.task.state !== 'TASK_ARCHIVED' && (
                    <a onClick={() => props.onPinTask && props.onPinTask(props.task.id)}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
}