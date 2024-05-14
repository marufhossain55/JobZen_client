import { Link } from 'react-router-dom';

const AllJobsCards = ({ jobs, idx }) => {
  const {
    _id,
    Category,
    Application_Deadline,
    Job_Title,
    min_salary,
    max_salary,
    Job_Posting_Date,
  } = jobs;
  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra'>
        {/* head */}

        <tbody>
          {/* row 1 */}
          <tr>
            <th className='w-1'>{idx + 1}</th>
            <td className='w-14'>{Job_Title}</td>
            <td className='w-14'>{Job_Posting_Date}</td>
            <td className='w-14'>{Application_Deadline}</td>
            <td className='w-14'>
              {min_salary} to {max_salary}
            </td>
            <td className='w-14'>
              <Link to={`/job/${_id}`} className='btn w-30'>
                View Details
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default AllJobsCards;
