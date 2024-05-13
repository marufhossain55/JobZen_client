import { useQuery } from '@tanstack/react-query';
import AllJobsCards from '../components/AllJobsCards';
import axios from 'axios';

const AllJobs = () => {
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
      <table className='table table-zebra'>
        {/* head */}
        <tbody>
          <tr>
            <th className='w-1'>Sn</th>
            <th className='w-14'>Job Title</th>
            <th className='w-14'>Job Posting Date</th>
            <th className='w-14 '>Application Deadline</th>
            <th className='w-14'>Salary range</th>
            <th className='w-14'>Details</th>
          </tr>
        </tbody>
      </table>
      {allJobs?.map((jobs, idx) => (
        <AllJobsCards key={jobs._id} jobs={jobs} idx={idx} />
      ))}
    </div>
  );
};
export default AllJobs;

// `${import.meta.env.VITE_API_URL}/jobs`;
