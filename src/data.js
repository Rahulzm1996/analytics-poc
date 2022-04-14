const BAR_GRAPH_CSV_DATA = [
  {
    Series: "136",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 163,
  },
  {
    Series: "202",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 147,
  },
  {
    Series: "206",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 101,
  },
  {
    Series: "242",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 134,
  },
  {
    Series: "324",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 407,
  },
  {
    Series: "325",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 245,
  },
  {
    Series: "003",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 1606,
  },
  {
    Series: "025",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 674,
  },
  {
    Series: "026",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 425,
  },
  {
    Series: "ier",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 422,
  },
  {
    Series: "016",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 324,
  },
  {
    Series: "010",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 209,
  },
  {
    Series: "015",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 198,
  },
  {
    Series: "002",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 96,
  },
  {
    Series: "001",
    Time: "2022-04-14T10:43:10+05:30",
    Value: 96,
  },
];

const LINE_GRAPH_CSV_DATA = [
  {
    Series: "value",
    Time: "2022-03-15T05:30:00+05:30",
    Value: 148,
  },
  {
    Series: "value",
    Time: "2022-03-16T05:30:00+05:30",
    Value: 324,
  },
  {
    Series: "value",
    Time: "2022-03-17T05:30:00+05:30",
    Value: 225,
  },
  {
    Series: "value",
    Time: "2022-03-18T05:30:00+05:30",
    Value: 170,
  },
  {
    Series: "value",
    Time: "2022-03-19T05:30:00+05:30",
    Value: 107,
  },
  {
    Series: "value",
    Time: "2022-03-20T05:30:00+05:30",
    Value: 88,
  },
];

export const getXaxisBarGraphData = () => {
  return BAR_GRAPH_CSV_DATA.map((data) => {
    return data.Series;
  });
};
export const getYaxisBarGraphData = () => {
  return BAR_GRAPH_CSV_DATA.map((data) => {
    return data.Value;
  });
};
export const getXaxisLineGraphData = () => {
  return LINE_GRAPH_CSV_DATA.map((data) => {
    return data.Series;
  });
};
export const getYaxisLineGraphData = () => {
  return LINE_GRAPH_CSV_DATA.map((data) => {
    return data.Value;
  });
};
