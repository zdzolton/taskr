function(e, lastTaskDate) {
  $.log("MOAR from: " + lastTaskDate);
  return {
    "type" : "newRows",
    "view" : "recent-tasks",
    "skip": 1,
    "limit" : 5,
    "descending" : true,
    "startkey": lastTaskDate
  };
}
