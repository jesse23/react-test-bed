interface ItemData {
  text: string;
  status: string;
}

interface GroupData extends ItemData {
  items: ItemData[];
}

interface ReportData extends ItemData {
  categories: GroupData[];
}

const SAMPLE_DATA: ReportData = {
  text: "Not SaaS ready",
  status: "error",
  categories: [
    {
      text: "Version",
      status: "pass",
      items: [
        {
          text: "Version is correct",
          status: "pass",
        },
      ],
    },
    {
      text: "Capability",
      status: "error",
      items: [
        {
          text: "OOTB Capability is correct",
          status: "pass",
        },
        {
          text: "CAD View is not supported",
          status: "error",
        },
      ],
    },
    {
      text: "Integration",
      status: "warn",
      items: [
        {
          text: "SSO",
          status: "pass",
        },
        {
          text: "Export / Import",
          status: "warn",
        },
      ],
    },
  ],
};

const getColorByStatus = (status: string) => {
  return status === "pass" ? "green" : status === "warn" ? "orange" : "red";
};

const ColumnReportDashboard = ({ reportData }: { reportData: ReportData }) => {
  return (
    <div>
      <h2>Impact Analysis</h2>
      <div
        style={{
          backgroundColor: "lightgray",
          padding: "10px",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        DASHBOARD
      </div>
      {/* Overall Status */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>Overall status:</div>
        <div
          style={{
            color: getColorByStatus(reportData.status),
            marginLeft: "10px",
          }}
        >
          {reportData.status}
        </div>
        <div
          style={{
            color: getColorByStatus(reportData.status),
            marginLeft: "10px",
          }}
        >
          {reportData.text}
        </div>
      </div>
      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        {reportData.categories.map((category: any) => {
          return (
            <div
              style={{
                margin: "10px",
                border: "1px solid black",
                width: "100%",
              }}
            >
              {/* Card Title */}
              <div
                style={{
                  backgroundColor: getColorByStatus(category.status),
                  color: "white",
                  padding: "10px",
                }}
              >
                {category.text}
              </div>
              {/* Card Content */}
              <div
                style={{
                  padding: "10px",
                }}
              >
                {category.items.map((item: any) => {
                  return (
                    <div
                      style={{
                        padding: "10px",
                        flexDirection: "row",
                      }}
                    >
                      <span>{item.text}</span>
                      <span
                        style={{
                          float: "right",
                          color: getColorByStatus(item.status),
                        }}
                      >
                        {item.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ColumnReportSamplePage = () => {
  return (
    <div>
      <h1>Column Report Sample</h1>
      <ColumnReportDashboard reportData={SAMPLE_DATA} />
    </div>
  );
};

export default ColumnReportSamplePage;
