// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

  const {
    num, zero, pick, pluck, join, concat, merge,
    interval, masked, date, datetime, season, qualify
  } = require('./util')

  const {
    DAY, MONTH, YEAR, YMD, YM, MD, YYXX, YYYX, XXXX
  } = require('./bitmask')

var grammar = {
    ParserRules: [
    {"name": "edtf", "symbols": ["L0"], "postprocess": id},
    {"name": "edtf", "symbols": ["L1"], "postprocess": id},
    {"name": "edtf", "symbols": ["L2"], "postprocess": id},
    {"name": "L0", "symbols": ["date_time"], "postprocess": id},
    {"name": "L0", "symbols": ["century"], "postprocess": id},
    {"name": "L0", "symbols": ["L0i"], "postprocess": id},
    {"name": "L0i", "symbols": ["date_time", {"literal":"/"}, "date_time"], "postprocess": interval(0)},
    {"name": "century", "symbols": ["d2"], "postprocess": data => ({ values: [num(data[0])], type: 'century', level: 0 })},
    {"name": "date_time", "symbols": ["date"], "postprocess": id},
    {"name": "date_time", "symbols": ["datetime"], "postprocess": id},
    {"name": "date", "symbols": ["year"], "postprocess": data => date(data)},
    {"name": "date", "symbols": ["year_month"], "postprocess": data => date(data[0])},
    {"name": "date", "symbols": ["year_month_day"], "postprocess": data => date(data[0])},
    {"name": "year", "symbols": ["positive_year"], "postprocess": id},
    {"name": "year", "symbols": ["negative_year"], "postprocess": id},
    {"name": "year$string$1", "symbols": [{"literal":"0"}, {"literal":"0"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "year", "symbols": ["year$string$1"], "postprocess": join},
    {"name": "positive_year", "symbols": ["positive_digit", "digit", "digit", "digit"], "postprocess": join},
    {"name": "positive_year", "symbols": [{"literal":"0"}, "positive_digit", "digit", "digit"], "postprocess": join},
    {"name": "positive_year$string$1", "symbols": [{"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "positive_year", "symbols": ["positive_year$string$1", "positive_digit", "digit"], "postprocess": join},
    {"name": "positive_year$string$2", "symbols": [{"literal":"0"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "positive_year", "symbols": ["positive_year$string$2", "positive_digit"], "postprocess": join},
    {"name": "negative_year", "symbols": [{"literal":"-"}, "positive_year"], "postprocess": join},
    {"name": "year_month", "symbols": ["year", {"literal":"-"}, "month"], "postprocess": pick(0, 2)},
    {"name": "year_month_day", "symbols": ["year", {"literal":"-"}, "month_day"], "postprocess": pick(0, 2)},
    {"name": "month", "symbols": ["d01_12"], "postprocess": id},
    {"name": "month_day", "symbols": ["m31", {"literal":"-"}, "day"], "postprocess": pick(0, 2)},
    {"name": "month_day", "symbols": ["m30", {"literal":"-"}, "d01_30"], "postprocess": pick(0, 2)},
    {"name": "month_day$string$1", "symbols": [{"literal":"0"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month_day", "symbols": ["month_day$string$1", {"literal":"-"}, "d01_29"], "postprocess": pick(0, 2)},
    {"name": "day", "symbols": ["d01_31"], "postprocess": id},
    {"name": "datetime$ebnf$1$subexpression$1", "symbols": ["timezone"], "postprocess": id},
    {"name": "datetime$ebnf$1", "symbols": ["datetime$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "datetime$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "datetime", "symbols": ["date", {"literal":"T"}, "time", "datetime$ebnf$1"], "postprocess": datetime},
    {"name": "time", "symbols": ["hours", {"literal":":"}, "minutes", {"literal":":"}, "seconds", "milliseconds"], "postprocess": pick(0, 2, 4, 5)},
    {"name": "time$string$1", "symbols": [{"literal":"2"}, {"literal":"4"}, {"literal":":"}, {"literal":"0"}, {"literal":"0"}, {"literal":":"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "time", "symbols": ["time$string$1"], "postprocess": () => [24, 00, 00]},
    {"name": "hours", "symbols": ["d00_23"], "postprocess": num},
    {"name": "minutes", "symbols": ["d00_59"], "postprocess": num},
    {"name": "seconds", "symbols": ["d00_59"], "postprocess": num},
    {"name": "milliseconds", "symbols": []},
    {"name": "milliseconds", "symbols": [{"literal":"."}, "d3"], "postprocess": data => num(data.slice(1))},
    {"name": "timezone", "symbols": [{"literal":"Z"}], "postprocess": zero},
    {"name": "timezone", "symbols": [{"literal":"-"}, "offset"], "postprocess": data => -data[1]},
    {"name": "timezone", "symbols": [{"literal":"+"}, "positive_offset"], "postprocess": pick(1)},
    {"name": "positive_offset", "symbols": ["offset"], "postprocess": id},
    {"name": "positive_offset$string$1", "symbols": [{"literal":"0"}, {"literal":"0"}, {"literal":":"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "positive_offset", "symbols": ["positive_offset$string$1"], "postprocess": zero},
    {"name": "positive_offset$subexpression$1$string$1", "symbols": [{"literal":"1"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "positive_offset$subexpression$1", "symbols": ["positive_offset$subexpression$1$string$1"]},
    {"name": "positive_offset$subexpression$1$string$2", "symbols": [{"literal":"1"}, {"literal":"3"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "positive_offset$subexpression$1", "symbols": ["positive_offset$subexpression$1$string$2"]},
    {"name": "positive_offset", "symbols": ["positive_offset$subexpression$1", {"literal":":"}, "minutes"], "postprocess": data => num(data[0]) * 60 + data[2]},
    {"name": "positive_offset$string$2", "symbols": [{"literal":"1"}, {"literal":"4"}, {"literal":":"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "positive_offset", "symbols": ["positive_offset$string$2"], "postprocess": () => 840},
    {"name": "positive_offset", "symbols": ["d00_14"], "postprocess": data => num(data[0]) * 60},
    {"name": "offset", "symbols": ["d01_11", {"literal":":"}, "minutes"], "postprocess": data => num(data[0]) * 60 + data[2]},
    {"name": "offset$string$1", "symbols": [{"literal":"0"}, {"literal":"0"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "offset", "symbols": ["offset$string$1", "d01_59"], "postprocess": data => num(data[1])},
    {"name": "offset$string$2", "symbols": [{"literal":"1"}, {"literal":"2"}, {"literal":":"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "offset", "symbols": ["offset$string$2"], "postprocess": () => 720},
    {"name": "offset", "symbols": ["d01_12"], "postprocess": data => num(data[0]) * 60},
    {"name": "L1", "symbols": ["date_ua"], "postprocess": id},
    {"name": "L1", "symbols": ["L1X"], "postprocess": merge(0, { type: 'date', level: 1 })},
    {"name": "L1", "symbols": ["L1Y"], "postprocess": id},
    {"name": "L1", "symbols": ["L1S"], "postprocess": id},
    {"name": "L1", "symbols": ["L1i"], "postprocess": id},
    {"name": "date_ua", "symbols": ["date", "UA"], "postprocess": merge(0, 1, { level: 1 })},
    {"name": "L1i", "symbols": ["L1i_date", {"literal":"/"}, "L1i_date"], "postprocess": interval(1)},
    {"name": "L1i", "symbols": ["date_time", {"literal":"/"}, "L1i_date"], "postprocess": interval(1)},
    {"name": "L1i", "symbols": ["L1i_date", {"literal":"/"}, "date_time"], "postprocess": interval(1)},
    {"name": "L1i_date", "symbols": [], "postprocess": () => ({ values: [], type: 'unknown', level: 1 })},
    {"name": "L1i_date", "symbols": ["date_ua"], "postprocess": id},
    {"name": "L1i_date", "symbols": [{"literal":"*"}], "postprocess": () => ({ values: [], type: 'open', level: 1 })},
    {"name": "L1X$string$1", "symbols": [{"literal":"-"}, {"literal":"X"}, {"literal":"X"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "L1X", "symbols": ["d4", {"literal":"-"}, "md", "L1X$string$1"], "postprocess": masked()},
    {"name": "L1X$string$2", "symbols": [{"literal":"-"}, {"literal":"X"}, {"literal":"X"}, {"literal":"-"}, {"literal":"X"}, {"literal":"X"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "L1X", "symbols": ["d4", "L1X$string$2"], "postprocess": masked()},
    {"name": "L1X$string$3", "symbols": [{"literal":"X"}, {"literal":"X"}, {"literal":"X"}, {"literal":"X"}, {"literal":"-"}, {"literal":"X"}, {"literal":"X"}, {"literal":"-"}, {"literal":"X"}, {"literal":"X"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "L1X", "symbols": ["L1X$string$3"], "postprocess": masked()},
    {"name": "L1X$string$4", "symbols": [{"literal":"-"}, {"literal":"X"}, {"literal":"X"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "L1X", "symbols": ["d4", "L1X$string$4"], "postprocess": masked()},
    {"name": "L1X$string$5", "symbols": [{"literal":"X"}, {"literal":"X"}, {"literal":"X"}, {"literal":"X"}, {"literal":"-"}, {"literal":"X"}, {"literal":"X"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "L1X", "symbols": ["L1X$string$5"], "postprocess": masked()},
    {"name": "L1X$string$6", "symbols": [{"literal":"X"}, {"literal":"X"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "L1X", "symbols": ["d2", "L1X$string$6"], "postprocess": masked()},
    {"name": "L1X", "symbols": ["d3", {"literal":"X"}], "postprocess": masked()},
    {"name": "L1X$string$7", "symbols": [{"literal":"X"}, {"literal":"X"}, {"literal":"X"}, {"literal":"X"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "L1X", "symbols": ["L1X$string$7"], "postprocess": masked()},
    {"name": "L1Y", "symbols": [{"literal":"Y"}, "d5+"], "postprocess": data => date([num(data[1])], 1)},
    {"name": "L1Y$string$1", "symbols": [{"literal":"Y"}, {"literal":"-"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "L1Y", "symbols": ["L1Y$string$1", "d5+"], "postprocess": data => date([-num(data[1])], 1)},
    {"name": "UA", "symbols": [{"literal":"?"}], "postprocess": () => ({ uncertain: true })},
    {"name": "UA", "symbols": [{"literal":"~"}], "postprocess": () => ({ approximate: true })},
    {"name": "UA", "symbols": [{"literal":"%"}], "postprocess": () => ({ approximate: true, uncertain: true })},
    {"name": "L1S", "symbols": ["year", {"literal":"-"}, "d21_24"], "postprocess": data => season(data, 1)},
    {"name": "L2", "symbols": ["pua_date"], "postprocess": id},
    {"name": "L2", "symbols": ["L2Y"], "postprocess": id},
    {"name": "L2", "symbols": ["L2X"], "postprocess": merge(0, { type: 'date', level: 2 })},
    {"name": "L2", "symbols": ["L2S"], "postprocess": id},
    {"name": "L2", "symbols": ["decade"], "postprocess": id},
    {"name": "L2", "symbols": ["decade", "UA"], "postprocess": merge(0, 1)},
    {"name": "pua_date", "symbols": ["pua_year"], "postprocess": qualify},
    {"name": "pua_date", "symbols": ["pua_year_month"], "postprocess": qualify},
    {"name": "pua_date", "symbols": ["pua_year_month_day"], "postprocess": qualify},
    {"name": "pua_year", "symbols": ["UA", "year"], "postprocess": data => [data]},
    {"name": "pua_year_month$macrocall$2", "symbols": ["year"]},
    {"name": "pua_year_month$macrocall$1$ebnf$1", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_year_month$macrocall$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_year_month$macrocall$1$ebnf$2", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_year_month$macrocall$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_year_month$macrocall$1", "symbols": ["pua_year_month$macrocall$1$ebnf$1", "pua_year_month$macrocall$2", "pua_year_month$macrocall$1$ebnf$2"]},
    {"name": "pua_year_month$macrocall$4", "symbols": ["month"]},
    {"name": "pua_year_month$macrocall$3$ebnf$1", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_year_month$macrocall$3$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_year_month$macrocall$3$ebnf$2", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_year_month$macrocall$3$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_year_month$macrocall$3", "symbols": ["pua_year_month$macrocall$3$ebnf$1", "pua_year_month$macrocall$4", "pua_year_month$macrocall$3$ebnf$2"]},
    {"name": "pua_year_month", "symbols": ["pua_year_month$macrocall$1", {"literal":"-"}, "pua_year_month$macrocall$3"], "postprocess": pluck(0, 2)},
    {"name": "pua_year_month_day$macrocall$2", "symbols": ["year"]},
    {"name": "pua_year_month_day$macrocall$1$ebnf$1", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_year_month_day$macrocall$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_year_month_day$macrocall$1$ebnf$2", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_year_month_day$macrocall$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_year_month_day$macrocall$1", "symbols": ["pua_year_month_day$macrocall$1$ebnf$1", "pua_year_month_day$macrocall$2", "pua_year_month_day$macrocall$1$ebnf$2"]},
    {"name": "pua_year_month_day", "symbols": ["pua_year_month_day$macrocall$1", {"literal":"-"}, "pua_month_day"], "postprocess": data => [data[0], ...data[2]]},
    {"name": "pua_month_day$macrocall$2", "symbols": ["m31"]},
    {"name": "pua_month_day$macrocall$1$ebnf$1", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_month_day$macrocall$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_month_day$macrocall$1$ebnf$2", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_month_day$macrocall$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_month_day$macrocall$1", "symbols": ["pua_month_day$macrocall$1$ebnf$1", "pua_month_day$macrocall$2", "pua_month_day$macrocall$1$ebnf$2"]},
    {"name": "pua_month_day$macrocall$4", "symbols": ["day"]},
    {"name": "pua_month_day$macrocall$3$ebnf$1", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_month_day$macrocall$3$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_month_day$macrocall$3$ebnf$2", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_month_day$macrocall$3$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_month_day$macrocall$3", "symbols": ["pua_month_day$macrocall$3$ebnf$1", "pua_month_day$macrocall$4", "pua_month_day$macrocall$3$ebnf$2"]},
    {"name": "pua_month_day", "symbols": ["pua_month_day$macrocall$1", {"literal":"-"}, "pua_month_day$macrocall$3"], "postprocess": pluck(0, 2)},
    {"name": "pua_month_day$macrocall$6", "symbols": ["m30"]},
    {"name": "pua_month_day$macrocall$5$ebnf$1", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_month_day$macrocall$5$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_month_day$macrocall$5$ebnf$2", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_month_day$macrocall$5$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_month_day$macrocall$5", "symbols": ["pua_month_day$macrocall$5$ebnf$1", "pua_month_day$macrocall$6", "pua_month_day$macrocall$5$ebnf$2"]},
    {"name": "pua_month_day$macrocall$8", "symbols": ["d01_30"]},
    {"name": "pua_month_day$macrocall$7$ebnf$1", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_month_day$macrocall$7$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_month_day$macrocall$7$ebnf$2", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_month_day$macrocall$7$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_month_day$macrocall$7", "symbols": ["pua_month_day$macrocall$7$ebnf$1", "pua_month_day$macrocall$8", "pua_month_day$macrocall$7$ebnf$2"]},
    {"name": "pua_month_day", "symbols": ["pua_month_day$macrocall$5", {"literal":"-"}, "pua_month_day$macrocall$7"], "postprocess": pluck(0, 2)},
    {"name": "pua_month_day$macrocall$10$string$1", "symbols": [{"literal":"0"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "pua_month_day$macrocall$10", "symbols": ["pua_month_day$macrocall$10$string$1"]},
    {"name": "pua_month_day$macrocall$9$ebnf$1", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_month_day$macrocall$9$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_month_day$macrocall$9$ebnf$2", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_month_day$macrocall$9$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_month_day$macrocall$9", "symbols": ["pua_month_day$macrocall$9$ebnf$1", "pua_month_day$macrocall$10", "pua_month_day$macrocall$9$ebnf$2"]},
    {"name": "pua_month_day$macrocall$12", "symbols": ["d01_29"]},
    {"name": "pua_month_day$macrocall$11$ebnf$1", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_month_day$macrocall$11$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_month_day$macrocall$11$ebnf$2", "symbols": ["UA"], "postprocess": id},
    {"name": "pua_month_day$macrocall$11$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "pua_month_day$macrocall$11", "symbols": ["pua_month_day$macrocall$11$ebnf$1", "pua_month_day$macrocall$12", "pua_month_day$macrocall$11$ebnf$2"]},
    {"name": "pua_month_day", "symbols": ["pua_month_day$macrocall$9", {"literal":"-"}, "pua_month_day$macrocall$11"], "postprocess": pluck(0, 2)},
    {"name": "L2X", "symbols": ["dx4"], "postprocess": masked()},
    {"name": "L2X", "symbols": ["dx4", {"literal":"-"}, "mx"], "postprocess": masked()},
    {"name": "L2X", "symbols": ["dx4", {"literal":"-"}, "mdx"], "postprocess": masked()},
    {"name": "mdx", "symbols": ["m31x", {"literal":"-"}, "d31x"], "postprocess": join},
    {"name": "mdx", "symbols": ["m30x", {"literal":"-"}, "d30x"], "postprocess": join},
    {"name": "mdx$string$1", "symbols": [{"literal":"0"}, {"literal":"2"}, {"literal":"-"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "mdx", "symbols": ["mdx$string$1", "d29x"], "postprocess": join},
    {"name": "L2Y", "symbols": [{"literal":"Y"}, "exp_year"], "postprocess": data => date([data[1]], 2)},
    {"name": "L2Y$string$1", "symbols": [{"literal":"Y"}, {"literal":"-"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "L2Y", "symbols": ["L2Y$string$1", "exp_year"], "postprocess": data => date([-data[1]], 2)},
    {"name": "exp_year", "symbols": ["digits", {"literal":"E"}, "digits"], "postprocess": data => num(data[0]) * Math.pow(10, num(data[2]))},
    {"name": "L2S", "symbols": ["year", {"literal":"-"}, "d25_39"], "postprocess": data => season(data, 2)},
    {"name": "decade", "symbols": ["d3"], "postprocess": data => ({ values: [num(data)], type: 'decade', level: 2 })},
    {"name": "digit", "symbols": ["positive_digit"], "postprocess": id},
    {"name": "digit", "symbols": [{"literal":"0"}], "postprocess": id},
    {"name": "digits", "symbols": ["digit"], "postprocess": id},
    {"name": "digits", "symbols": ["digit", "digits"], "postprocess": join},
    {"name": "d4", "symbols": ["d2", "d2"], "postprocess": join},
    {"name": "d3", "symbols": ["d2", "digit"], "postprocess": join},
    {"name": "d2", "symbols": ["digit", "digit"], "postprocess": join},
    {"name": "d5+", "symbols": ["positive_digit", "d3", "digits"], "postprocess": num},
    {"name": "d1x", "symbols": [/[1-9X]/], "postprocess": id},
    {"name": "dx", "symbols": ["d1x"], "postprocess": id},
    {"name": "dx", "symbols": [{"literal":"0"}], "postprocess": id},
    {"name": "dx2", "symbols": ["dx", "dx"], "postprocess": join},
    {"name": "dx4", "symbols": ["dx2", "dx2"], "postprocess": join},
    {"name": "md", "symbols": ["m31"], "postprocess": id},
    {"name": "md", "symbols": ["m30"], "postprocess": id},
    {"name": "md$string$1", "symbols": [{"literal":"0"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "md", "symbols": ["md$string$1"], "postprocess": id},
    {"name": "mx", "symbols": [{"literal":"0"}, "d1x"], "postprocess": join},
    {"name": "mx", "symbols": [/[1X]/, /[012X]/], "postprocess": join},
    {"name": "m31x", "symbols": [/[0X]/, /[13578X]/], "postprocess": join},
    {"name": "m31x", "symbols": [/[1X]/, /[02]/], "postprocess": join},
    {"name": "m31x$string$1", "symbols": [{"literal":"1"}, {"literal":"X"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m31x", "symbols": ["m31x$string$1"], "postprocess": id},
    {"name": "m30x", "symbols": [/[0X]/, /[469]/], "postprocess": join},
    {"name": "m30x$string$1", "symbols": [{"literal":"1"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m30x", "symbols": ["m30x$string$1"], "postprocess": join},
    {"name": "d29x", "symbols": [/[0-2X]/, "dx"], "postprocess": join},
    {"name": "d30x", "symbols": ["d29x"], "postprocess": join},
    {"name": "d30x$string$1", "symbols": [{"literal":"3"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "d30x", "symbols": ["d30x$string$1"], "postprocess": id},
    {"name": "d31x", "symbols": ["d30x"], "postprocess": id},
    {"name": "d31x", "symbols": [{"literal":"3"}, /[1X]/], "postprocess": join},
    {"name": "positive_digit", "symbols": [/[1-9]/], "postprocess": id},
    {"name": "m31$subexpression$1$string$1", "symbols": [{"literal":"0"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m31$subexpression$1", "symbols": ["m31$subexpression$1$string$1"]},
    {"name": "m31$subexpression$1$string$2", "symbols": [{"literal":"0"}, {"literal":"3"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m31$subexpression$1", "symbols": ["m31$subexpression$1$string$2"]},
    {"name": "m31$subexpression$1$string$3", "symbols": [{"literal":"0"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m31$subexpression$1", "symbols": ["m31$subexpression$1$string$3"]},
    {"name": "m31$subexpression$1$string$4", "symbols": [{"literal":"0"}, {"literal":"7"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m31$subexpression$1", "symbols": ["m31$subexpression$1$string$4"]},
    {"name": "m31$subexpression$1$string$5", "symbols": [{"literal":"0"}, {"literal":"8"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m31$subexpression$1", "symbols": ["m31$subexpression$1$string$5"]},
    {"name": "m31$subexpression$1$string$6", "symbols": [{"literal":"1"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m31$subexpression$1", "symbols": ["m31$subexpression$1$string$6"]},
    {"name": "m31$subexpression$1$string$7", "symbols": [{"literal":"1"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m31$subexpression$1", "symbols": ["m31$subexpression$1$string$7"]},
    {"name": "m31", "symbols": ["m31$subexpression$1"], "postprocess": id},
    {"name": "m30$subexpression$1$string$1", "symbols": [{"literal":"0"}, {"literal":"4"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m30$subexpression$1", "symbols": ["m30$subexpression$1$string$1"]},
    {"name": "m30$subexpression$1$string$2", "symbols": [{"literal":"0"}, {"literal":"6"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m30$subexpression$1", "symbols": ["m30$subexpression$1$string$2"]},
    {"name": "m30$subexpression$1$string$3", "symbols": [{"literal":"0"}, {"literal":"9"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m30$subexpression$1", "symbols": ["m30$subexpression$1$string$3"]},
    {"name": "m30$subexpression$1$string$4", "symbols": [{"literal":"1"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "m30$subexpression$1", "symbols": ["m30$subexpression$1$string$4"]},
    {"name": "m30", "symbols": ["m30$subexpression$1"], "postprocess": id},
    {"name": "d01_11", "symbols": [{"literal":"0"}, "positive_digit"], "postprocess": join},
    {"name": "d01_11", "symbols": [{"literal":"1"}, /[0-1]/], "postprocess": join},
    {"name": "d01_12", "symbols": ["d01_11"], "postprocess": id},
    {"name": "d01_12$string$1", "symbols": [{"literal":"1"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "d01_12", "symbols": ["d01_12$string$1"], "postprocess": id},
    {"name": "d01_13", "symbols": ["d01_12"], "postprocess": id},
    {"name": "d01_13$string$1", "symbols": [{"literal":"1"}, {"literal":"3"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "d01_13", "symbols": ["d01_13$string$1"], "postprocess": id},
    {"name": "d00_14$string$1", "symbols": [{"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "d00_14", "symbols": ["d00_14$string$1"], "postprocess": id},
    {"name": "d00_14", "symbols": ["d01_13"], "postprocess": id},
    {"name": "d00_14$string$2", "symbols": [{"literal":"1"}, {"literal":"4"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "d00_14", "symbols": ["d00_14$string$2"], "postprocess": id},
    {"name": "d00_23$string$1", "symbols": [{"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "d00_23", "symbols": ["d00_23$string$1"], "postprocess": id},
    {"name": "d00_23", "symbols": ["d01_23"], "postprocess": id},
    {"name": "d01_23", "symbols": [{"literal":"0"}, "positive_digit"], "postprocess": join},
    {"name": "d01_23", "symbols": [{"literal":"1"}, "digit"], "postprocess": join},
    {"name": "d01_23", "symbols": [{"literal":"2"}, /[0-3]/], "postprocess": join},
    {"name": "d01_29", "symbols": [{"literal":"0"}, "positive_digit"], "postprocess": join},
    {"name": "d01_29", "symbols": [/[1-2]/, "digit"], "postprocess": join},
    {"name": "d01_30", "symbols": ["d01_29"], "postprocess": id},
    {"name": "d01_30$string$1", "symbols": [{"literal":"3"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "d01_30", "symbols": ["d01_30$string$1"], "postprocess": id},
    {"name": "d01_31", "symbols": ["d01_30"], "postprocess": id},
    {"name": "d01_31$string$1", "symbols": [{"literal":"3"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "d01_31", "symbols": ["d01_31$string$1"], "postprocess": id},
    {"name": "d00_59$string$1", "symbols": [{"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "d00_59", "symbols": ["d00_59$string$1"], "postprocess": id},
    {"name": "d00_59", "symbols": ["d01_59"], "postprocess": id},
    {"name": "d01_59", "symbols": ["d01_29"], "postprocess": id},
    {"name": "d01_59", "symbols": [/[345]/, "digit"], "postprocess": join},
    {"name": "d21_24", "symbols": [{"literal":"2"}, /[1-4]/], "postprocess": join},
    {"name": "d25_39", "symbols": [{"literal":"2"}, /[5-9]/], "postprocess": join},
    {"name": "d25_39", "symbols": [{"literal":"3"}, "digit"], "postprocess": join}
]
  , ParserStart: "edtf"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
