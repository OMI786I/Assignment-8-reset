import { useEffect, useState } from "react";

const AboutUs = () => {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, []);

  return (
    <div>
      <div className="about-section bg-gray-700 text-white text-center p-12">
        <h1 className="text-4xl font-bold mb-4">About Us Page</h1>
        <p className="mb-2">Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 className="text-center text-3xl font-bold my-8">Our Team</h2>
      <div className="flex flex-col lg:flex-row gap-7 justify-center">
        {person.map((person) => (
          <div key={person.id}>
            <div className="card w-full   lg:w-80  bg-base-100 shadow-xl">
              <figure>
                <img src="dummy.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{person.name}</h2>
                <p>{person.job_position}</p>
                <p>{person.hobby_text}</p>
                <p>{person.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
