const myDay = async () => {
  try {
    const canILeave = await workday;
    const whatNext = await afterWork(canILeave);
    console.log(whatNext);
  } catch (err) {
    console.log(err.message);
  }
 };
 
 myDay();