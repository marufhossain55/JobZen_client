import { useQuery } from '@tanstack/react-query';
import AllJobsCards from '../components/AllJobsCards';
import axios from 'axios';
import { useState } from 'react';

const AllJobs = () => {
  const [search, setSearch] = useState('');

  const {
    isPending,
    isError,
    error,
    data: allJobs,
  } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`);
      return res.data;
    },
  });
  if (isPending) {
    <span className='loading loading-ball loading-lg'></span>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div className='mt-4 '>
      <section className='relative w-full max-w-md px-5 py-4 mx-auto rounded-md'>
        <div className='relative'>
          <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <svg
              className='w-5 h-5 text-gray-400'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
          </span>

          <input
            onChange={(e) => setSearch(e.target.value)}
            type='text'
            className='w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
            placeholder='Search'
          />
        </div>
      </section>
      <table className='table table-zebra'>
        {/* head */}
        <tbody>
          <tr>
            <th className='w-1'>Sn</th>
            <th className='w-14'>Job Title</th>
            <th className='w-14'>Job Posting Date</th>
            <th className='w-14 '>Application Application_Deadline</th>
            <th className='w-14'>Salary range</th>
            <th className='w-14'>Details</th>
          </tr>
        </tbody>
      </table>
      {allJobs?.map((jobs, idx) =>
        jobs.Job_Title.toLowerCase().includes(search.toLowerCase()) ? (
          <AllJobsCards key={jobs._id} jobs={jobs} idx={idx} />
        ) : null
      )}
    </div>
  );
};
export default AllJobs;

// `${import.meta.env.VITE_API_URL}/jobs`;
