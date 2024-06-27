import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CourseGoal from './components/CourseGoal.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CourseGoal title={'learn react and ts'}>neko san desu</CourseGoal>
  </React.StrictMode>,
);
