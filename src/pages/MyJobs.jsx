import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

const MyJobs = () => {
  const { user } = useAuth();
  //   const [jobs, setJobs] = useState();

  //   useEffect(() => {
  //     const getData = async () => {
  //       const { data } = await axios(
  //         `${import.meta.env.VITE_API_URL}/postedJob/${user?.email}`
  //       );
  //       setJobs(data);
  //     };
  //     getData();
  //   }, [user]);
  //   console.log(jobs);
  //   console.log(user.email);
  const {
    isPending,
    isError,
    error,
    data: postedJob,
  } = useQuery({
    queryKey: ['postedJob'],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/postedJob/${user?.email}`
      );
      return res.data;
    },
  });
  if (isPending) {
    <span className='loading loading-ball loading-lg'></span>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  console.log(postedJob);

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th>Sn</th>
              <th>Job Title</th>
              <th>Category</th>
              <th>Deadline</th>
              <th>Salary range</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
        </table>
      </div>
      <div>
        {postedJob?.map((job, idx) => (
          <div key={job._id} className='overflow-x-auto'>
            <table className='table table-zebra'>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>{idx + 1}</th>
                  <td>{job.Job_Title}</td>
                  <td>{job.Category}</td>
                  <td>{job.Job_Applicants_Number}</td>
                  <td>{job.Application_Deadline}</td>
                  <td>
                    <FaRegEdit />
                  </td>
                  <td>
                    <RiDeleteBin6Line />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyJobs;
