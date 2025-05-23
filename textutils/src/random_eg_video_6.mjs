const a = "ali";
const b = "ahmad";
const c = "abeer";
const d = "mahnoor";

export default a; // this will export a so if this file is imported, a will be the thing to go

export {b};
export {c};
export {d}; // these will need to be accessed as shown in the other file, the variables used to access should be the same as the export