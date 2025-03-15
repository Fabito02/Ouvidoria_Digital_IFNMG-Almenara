// src/Router.tsx
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const pageModules = import.meta.glob('./pages/**/*.tsx');

const Router: React.FC = () => {
  const routes = Object.entries(pageModules).map(([path, module]) => {
    const routePath = path
      .replace('./pages', '')
      .replace(/\.tsx$/, '')
      .replace(/\/index$/, '')
      .toLowerCase();

    const Component = React.lazy(() => module() as Promise<{ default: React.ComponentType }>);

    return (
      <Route
        key={routePath}
        path={routePath}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        }
      />
    );
  });

  return <Routes>{routes}</Routes>;
};

export default Router;
