import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../hooks/useAuth';
const AddAJob = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const [startDateDeadline, setStartDateDeadline] = useState(new Date());

  const handleFromSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = user?.displayName;
    const email = user?.email;
    const photoURL = form.photoURL.value;
    const jobCategory = form.jobCategory.value;
    const jobTitle = form.jobTitle.value;
    const minSalaryRange = form.minSalaryRange.value;
    const maxSalaryRange = form.maxSalaryRange.value;
    const JobDescription = form.JobDescription.value;
    const jobApplicantsNumber = form.jobApplicantsNumber.value;
    const jobPostingDate = startDate;
    const applicationDeadline = startDateDeadline;
    const jobPostData = {
      userName,
      email,
      photoURL,
      jobCategory,
      jobTitle,
      minSalaryRange,
      maxSalaryRange,
      JobDescription,
      jobApplicantsNumber,
      jobPostingDate,
      applicationDeadline,
    };
    // console.log(jobPostData);
  };

  return (
    <section className='max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800'>
      <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
        Account settings
      </h2>

      <form onSubmit={handleFromSubmit}>
        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
          <div>
            <label className='text-gray-700 dark:text-gray-200'>
              User Name
            </label>
            <input
              defaultValue={user?.displayName}
              disabled
              name='userName'
              type='text'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label className='text-gray-700 dark:text-gray-200'>email</label>
            <input
              defaultValue={user?.email}
              disabled
              name='email'
              type='email'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label className='text-gray-700 dark:text-gray-200'>
              Photo URl
            </label>
            <input
              name='photoURL'
              type='text'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label className='text-gray-700 dark:text-gray-200'>
              Job Category
            </label>
            <select
              name='jobCategory'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            >
              <option value='On-Site'>On-Site</option>
              <option value='Remote'>Remote</option>
              <option value='Hybrid'>Hybrid</option>
              <option value='Part-Time'>Part-Time</option>
            </select>
          </div>

          <div>
            <label className='text-gray-700 dark:text-gray-200'>
              Job Title
            </label>
            <input
              name='jobTitle'
              type='text'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label className='text-gray-700 dark:text-gray-200'>
              Minimum Salary range
            </label>
            <input
              name='minSalaryRange'
              type='number'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label className='text-gray-700 dark:text-gray-200'>
              max Salary range
            </label>
            <input
              name='maxSalaryRange'
              type='number'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label className='text-gray-700 dark:text-gray-200'>
              Job Description
            </label>
            <input
              name='JobDescription'
              type='text'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-gray-700 dark:text-gray-200'>
              Job Posting Date
            </label>
            <div className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-gray-700 dark:text-gray-200'>
              Application Deadline
            </label>
            <div className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'>
              <DatePicker
                selected={startDateDeadline}
                onChange={(date) => setStartDateDeadline(date)}
              />
            </div>
          </div>
          <div>
            <label className='text-gray-700 dark:text-gray-200'>
              jobApplicantsNumber
            </label>
            <input
              defaultValue={0}
              name='jobApplicantsNumber'
              type='number'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
            />
          </div>
        </div>

        <div className='flex justify-end mt-6'>
          <button
            type='submit'
            className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
          >
            Post
          </button>
        </div>
      </form>
    </section>
  );
};
export default AddAJob;
