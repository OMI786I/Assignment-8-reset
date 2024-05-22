import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBooks from "./ListedBooks";
import ReadBooks from "./ReadBooks";

const DataShow = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadBooks></ReadBooks>
        </TabPanel>
        <TabPanel>
          <ListedBooks></ListedBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DataShow;