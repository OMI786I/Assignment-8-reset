import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBooks from "./ListedBooks";

const DataShow = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <ListedBooks></ListedBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DataShow;
