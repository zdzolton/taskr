function() {
  var app = $$(this).app;
  var ul = $("ul.tasks").first();
  var lastTaskDate = $("span.date", ul).last().text();
  $.log(lastTaskDate);
  ul.trigger("loadMore", [lastTaskDate]);
  return false;
}
