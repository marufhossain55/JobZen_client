import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCategoriesCard from './JobCategoriesCard';
const JobByCategories = () => {
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
    <div className='py-10 flex justify-center items-center'>
      <Tabs>
        <TabList>
          <Tab>On-Site Job</Tab>
          <Tab>Remote Job</Tab>
          <Tab>Hybrid</Tab>
          <Tab>Part-Time</Tab>
        </TabList>

        <TabPanel>
          <div className='grid grid-cols-2 gap-5'>
            {allJobs
              ?.filter((jobs) => jobs.Category === 'On-Site')
              .map((jobs) => (
                <JobCategoriesCard key={jobs._id} jobs={jobs} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-2 gap-5'>
            {allJobs
              ?.filter((jobs) => jobs.Category === 'Remote')
              .map((jobs) => (
                <JobCategoriesCard key={jobs._id} jobs={jobs} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-2 gap-5'>
            {allJobs
              ?.filter((jobs) => jobs.Category === 'Hybrid')
              .map((jobs) => (
                <JobCategoriesCard key={jobs._id} jobs={jobs} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-2 gap-5'>
            {allJobs
              ?.filter((jobs) => jobs.Category === 'Part-Time')
              .map((jobs) => (
                <JobCategoriesCard key={jobs._id} jobs={jobs} />
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default JobByCategories;
