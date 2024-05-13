import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import JobDetailsCard from '../components/JobDetailsCard';

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  const {
    isPending,
    isError,
    error,
    data: jobDetails,
  } = useQuery({
    queryKey: ['jobDetails'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/job/${id}`);
      return res.data;
    },
  });
  console.log(jobDetails);
  return (
    <div>
      <JobDetailsCard jobDetails={jobDetails} />
    </div>
  );
};
export default JobDetails;
