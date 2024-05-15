import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import edit from '../assets/edit.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

const MyJobs = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const [startDateDeadline, setStartDateDeadline] = useState(new Date());
  //   const [job, setJobs] = useState();
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
        `${import.meta.env.VITE_API_URL}/postedJob/${user?.email}`,
        { withCredentials: true }
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
  //   useEffect(() => {
  //     getData();
  //   }, []);

  //<------------------>
  const handleDelete = async (id) => {
    // try {
    //   const { data } = await axios.delete(
    //     `${import.meta.env.VITE_API_URL}/postedJob/${id}`
    //   );
    //   console.log(data);
    //   alert('delete success');
    //   setControl(!control);
    // } catch (err) {
    //   console.log(err.message);
    //   alert(err.message);
    // }
    //<----------->
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!',
    // }).then((result) => {
    //   if (result?.isConfirmed) {
    //     const { data } = axios.delete(
    //       `${import.meta.env.VITE_API_URL}/postedJob/${id}`
    //     );
    //     if (data?.deletedCount > 0) {
    //       setControl(!control);
    //       Swal.fire({
    //         title: 'Deleted!',
    //         text: 'Your tour spot has been deleted.',
    //         icon: 'success',
    //       });
    //     }
    //   }
    // });

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/postedJob/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              //   setControl(!control);
              Swal.fire({
                title: 'Deleted!',
                text: 'Your tour spot has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

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
                  <td>{job.Application_Deadline}</td>
                  <td>
                    {job.min_salary} to {job.max_salary}
                  </td>
                  {/* <td>{job.Job_Applicants_Number}</td> */}
                  <td className='cursor-pointer'>
                    <Link
                      to={`/updateJob/${job._id}`}
                      className=' btn btn-circle '
                    >
                      <img className='h-4' src={edit} alt='' />
                    </Link>
                  </td>
                  <td
                    className='cursor-pointer'
                    onClick={() => handleDelete(job._id)}
                  >
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
