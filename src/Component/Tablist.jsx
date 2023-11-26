import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OverView from './OverView';
import Packages from './Packages';
import Guides from './Guides';

const Tablist = () => {
    return (
        <Tabs>
        <TabList className="flex gap-4 justify-center items-center mx-auto">
          <Tab className="btn btn-outline btn-success">Over View</Tab>
          <Tab className="btn btn-outline btn-success">Our Packages</Tab>
          <Tab className="btn btn-outline btn-success">Meet Our Tour Guides</Tab>
        </TabList>
    
        <TabPanel className="my-4">
          <OverView/>
        </TabPanel>
    
        <TabPanel className="my-4">
        <Packages/>
        </TabPanel>
    
        <TabPanel className="my-4">
        <Guides/>
        </TabPanel>
       
      </Tabs>
    );
};

export default Tablist;