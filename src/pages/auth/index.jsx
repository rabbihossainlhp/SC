export const SignupPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-soft-lg p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Create Account</h1>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-8">Start your learning journey today</p>
      <p className="text-sm text-gray-500">Signup form placeholder - similar to login with name field</p>
    </div>
  </div>
);

export const ForgotPasswordPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4">
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-soft-lg p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Reset Password</h1>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-8">Enter your email to reset password</p>
      <p className="text-sm text-gray-500">Password reset form placeholder</p>
    </div>
  </div>
);

export default { SignupPage, ForgotPasswordPage };
