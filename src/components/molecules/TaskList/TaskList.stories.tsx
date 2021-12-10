import React from 'react'
import TaskList, { TaskListProps } from './TaskList'
import * as TaskStories from '@/components/atoms/Task/Task.stories'
import { TaskType } from '@/components/atoms/Task/Task';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    component: TaskList,
    title: 'TaskList',
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof TaskList>

const Template: ComponentStory<typeof TaskList> = (args: TaskListProps) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    tasks: [
      { ...(TaskStories.Default.args!.task), id: '1', title: 'Task 1' },
      { ...TaskStories.Default.args!.task, id: '2', title: 'Task 2' },
      { ...TaskStories.Default.args!.task, id: '3', title: 'Task 3' },
      { ...TaskStories.Default.args!.task, id: '4', title: 'Task 4' },
      { ...TaskStories.Default.args!.task, id: '5', title: 'Task 5' },
      { ...TaskStories.Default.args!.task, id: '6', title: 'Task 6' },
    ] as TaskType[],
  };

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
        ...Default.args.tasks!.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ] as TaskType[],
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
};