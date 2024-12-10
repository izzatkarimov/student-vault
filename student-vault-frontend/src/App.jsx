import './App.css';
import DepartmentComponent from './components/DepartmentComponent';
import StudentComponent from './components/StudentComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListDepartmentComponent from './components/ListDepartmentComponent';
import ListStudentComponent from './components/ListStudentComponent';
import HomePageComponent from './components/HomePageComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<HomePageComponent />} />

          {/* Students */}
          <Route path="/students" element={<ListStudentComponent />} />
          <Route path="/add-student" element={<StudentComponent />} />
          <Route path="/edit-student/:id" element={<StudentComponent />} />

          {/* Departments */}
          <Route path="/departments" element={<ListDepartmentComponent />} />
          <Route path="/add-department" element={<DepartmentComponent />} />
          <Route path="/edit-department/:id" element={<DepartmentComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
