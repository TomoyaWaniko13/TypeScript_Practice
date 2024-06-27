import { ReactNode } from 'react';

interface CourseGoalProps {
  title: String;
  children: ReactNode;
}

const CourseGoal = (props: CourseGoalProps) => {
  const title = props.title;
  const children = props.children;

  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button>delete</button>
    </article>
  );
};

export default CourseGoal;
