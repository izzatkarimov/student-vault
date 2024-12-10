import React from 'react';
import { Link } from 'react-router-dom';

const HomePageComponent = () => {
  return (
    <div className="container mt-5 text-center">
      {/* Welcome Section */}
      <div className="py-5">
        <h1 className="display-4 fw-bold">Welcome to StudentVault</h1>
        <p className="lead text-muted">
          Manage your students and departments efficiently in one place.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="d-flex justify-content-center gap-4">
        <Link to="/students" className="btn btn-success btn-lg">
          View Students
        </Link>
        <Link to="/departments" className="btn btn-success btn-lg">
          View Departments
        </Link>
      </div>
    </div>
  );
};

export default HomePageComponent;
