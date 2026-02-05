export const SignupPage = () => <div className="container-custom py-20"><h1 className="text-4xl font-bold">Signup Page</h1><p className="mt-4">Similar to login but with additional fields (name, password confirmation)</p></div>;
export const ForgotPasswordPage = () => <div className="container-custom py-20"><h1 className="text-4xl font-bold">Forgot Password</h1><p className="mt-4">Email input to reset password</p></div>;
export const StudentDashboard = () => <div className="container-custom py-20"><h1 className="text-4xl font-bold">Student Dashboard</h1><p className="mt-4">Overview of enrolled courses, progress, purchased products</p></div>;
export const InstructorDashboard = () => <div className="container-custom py-20"><h1 className="text-4xl font-bold">Instructor Dashboard</h1><p className="mt-4">Course management, analytics, earnings</p></div>;
export const EnrolledCoursesPage = () => <div className="container-custom py-20"><h1 className="text-4xl font-bold">My Courses</h1><p className="mt-4">List of enrolled courses with progress</p></div>;
export const CoursePlayerPage = () => <div className="container-custom py-20"><h1 className="text-4xl font-bold">Course Player</h1><p className="mt-4">Full course learning experience with video player, lessons sidebar, notes, discussions</p></div>;

export default {
  SignupPage,
  ForgotPasswordPage,
  StudentDashboard,
  InstructorDashboard,
  EnrolledCoursesPage,
  CoursePlayerPage
};
