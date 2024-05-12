import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const JobByCategories = () => {
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
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default JobByCategories;
