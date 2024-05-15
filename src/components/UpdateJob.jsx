import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateJob = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const {
    isPending,
    isError,
    error,
    data: updateJob,
  } = useQuery({
    queryKey: ['updateJob'],
    queryFn: async () => {
      return await axios
        .put(`${import.meta.env.VITE_API_URL}/postedJobEdit/${id}`)
        .then((res) => res);
      //   return res.data;
    },
  });
  if (isPending) {
    <span className='loading loading-ball loading-lg'></span>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  console.log(updateJob);
  return (
    <div>
      {' '}
      {/* <form>
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
            Update
          </button>
        </div>
      </form> */}
    </div>
  );
};
export default UpdateJob;
