import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBooks from "./ListedBooks";
import ReadBooks from "./ReadBooks";

import "react-dropdown/style.css";

const DataShow = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold p-6 rounded-lg mb-9 bg-[#f4f4f4]">
        Books
      </h1>
      <div className=" flex flex-row justify-center w-full  my-8">
        {" "}
        <details className="dropdown">
          <summary className="m-1 btn btn-success text-white">
            open or close
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>

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
