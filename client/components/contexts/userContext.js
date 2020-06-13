import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = props => {
  // User state
  const [user, setUser] = useState({
    name: '',
    jobTitle: '',
    company: '',
    base_salary: '',
  });

  // Stats state
  const [raceList, setRace] = useState([]);
  const [genderList, setGender] = useState([]);
  const [ageList, setAge] = useState([]);
  const [aggregateList, setAggregate] = useState([]);

  // Company wide state
  const [companyList, setCompany] = useState([]);

  // Percentages for piecharts
  const [agePercent, setAgePercent] = useState([]);
  const [racePercent, setRacePercent] = useState([]);
  const [genderPercent, setGenderPercent] = useState([]);

  const fetchUserData = () => {
    fetch('/api/company')
      .then(res => res.json())
      .then(res => {
        // console.log('in user context', res);
        const {
          currentUser,
          raceStats,
          genderStats,
          ageStats,
          jobStats,
          companyData,
        } = res;

        // Get perecentages
        setAgePercent(getPercentages(ageStats, 'age'));
        setRacePercent(getPercentages(raceStats, 'race'));
        setGenderPercent(getPercentages(genderStats, 'gender'));

        // Set user state
        const { name, linkedin_id, job_title, base_salary } = currentUser;
        setUser(state => ({
          ...state,
          name: name,
          company: linkedin_id,
          jobTitle: job_title,
          base_salary: base_salary,
        }));

        // Set stats and company wide state
        setRace(raceStats);
        setGender(genderStats);
        setAge(ageStats);
        setAggregate(jobStats);
        setCompany(companyData);
      })
      .catch(err => console.log('ERROR in userContext', err));
  };

  return (
    <UserContext.Provider
      value={{
        fetchUserData,
        user,
        raceList,
        genderList,
        ageList,
        aggregateList,
        companyList,
        agePercent,
        genderPercent,
        racePercent,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

/**
 * Helper function to get percentages from list. Returns an array of objects
 * @param {Array} array The category list
 * @param {string} keyword 'gender', 'race', 'age'
 * @return {Array} Returns an array of objects with the key value pairs: { category: 'Male', percentage: 53 }
 */
function getPercentages(array, keyword) {
  const output = [];

  // Get total to calculate final percentage
  let total = 0;
  for (let obj of array) {
    total += parseInt(obj.count);
  }

  // Create array of percentages
  for (let obj of array) {
    output.push({
      category: obj[keyword],
      percentage: (parseInt(obj.count) / total) * 100,
    });
  }

  return output;
}

export default UserContextProvider;
