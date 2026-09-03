import projBi from "@/assets/proj-bi.jpg";
import projApp from "@/assets/proj-app.jpg";
import projSql from "@/assets/proj-sql.jpg";
import projExcel from "@/assets/proj-excel.jpg";

export type Project = {
  id: string;
  no: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  impact: string[];
  links: { label: string; href: string }[];
  caseStudy: {
    challenge: string;
    approach: string;
    technology: string;
    solution: string;
    impact: string;
  };
  flow?: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "finance",
    no: "01",
    title: "Executive Finance Dashboard",
    category: "Power BI • Executive Reporting",
    image: projBi,
    description:
      "An executive-level financial dashboard consolidating the metrics leadership needs into one decision surface.",
    tech: ["Power BI", "DAX"],
    impact: ["One consolidated view", "Faster board reporting", "Variance visibility"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Tawfiq-Alh/Executive-Finance-Dashboard---Power-BI-Project",
      },
    ],
    caseStudy: {
      challenge:
        "Financial performance lived across scattered spreadsheets, so leadership spent more time assembling numbers than acting on them.",
      approach:
        "Mapped the decisions executives actually make each month, worked backwards to the metrics that drive them, and modelled the underlying financial data accordingly.",
      technology: "Power BI, DAX measures, a star-schema financial data model.",
      solution:
        "A single executive dashboard covering revenue, cost, margin and variance, with drill-through from headline KPI to line-item detail.",
      impact:
        "Strategic review meetings start from a shared, trusted set of numbers instead of reconciling conflicting reports.",
    },
  },
  {
    id: "afaq",
    no: "02",
    title: "AFAQ Real Estate Investment Platform",
    category: "Software Engineering • Data • Business Intelligence",
    image: projApp,
    description:
      "A co-investment real estate platform with investment history, property overviews, risk analysis, and digital investment workflows. I designed the CRM database architecture and led mobile development.",
    tech: [
      "Flutter",
      "Dart",
      "Laravel",
      "REST API",
      "Firebase",
      "BLoC",
      "Power BI",
      "KPI Design",
    ],
    impact: [
      "1,200+ CRM records",
      "15+ KPIs defined",
      "Real-time performance dashboard",
      "Revenue & conversion analysis",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Tawfiq-Alh/real_estate_investment_lawyer_app" },
    ],
    caseStudy: {
      challenge:
        "Co-investment in real estate required both a trustworthy digital investor experience and a CRM that could measure how the business was actually performing.",
      approach:
        "Designed the CRM data architecture first so every user action produced clean, analyzable records, then built the mobile experience on top of it.",
      technology: "Flutter with BLoC, Laravel REST APIs, Firebase, Power BI for the KPI layer.",
      solution:
        "An investor app covering property overviews, risk analysis, and investment history, backed by a CRM and a live performance dashboard.",
      impact:
        "1,200+ CRM records structured, 15+ KPIs defined, and real-time revenue and conversion analysis available to the team.",
    },
  },
  {
    id: "ngo",
    no: "03",
    title: "NGO Monitoring & Reporting Dashboard",
    category: "MEAL • Data Analytics • Humanitarian Data",
    image: projBi,
    description:
      "A monitoring and reporting system connecting field data collection directly to executive-level reporting.",
    tech: ["KoBo Toolbox", "Excel", "Power BI"],
    impact: ["97% data accuracy across 500+ records", "Reporting time: 6 hours → 30 minutes"],
    links: [],
    flow: ["Field Data", "Clean Data", "KPI", "Dashboard", "Decision"],
    caseStudy: {
      challenge:
        "Field data arrived inconsistent and late, and every report was rebuilt by hand — six hours of manual work with real risk of error.",
      approach:
        "Standardized collection forms, added validation at the point of entry, and defined a fixed set of MEAL indicators worth tracking.",
      technology: "KoBo Toolbox and XLS Forms for collection, Excel for cleaning, Power BI for reporting.",
      solution:
        "An end-to-end pipeline from field enumerator to executive dashboard, with quality checks between each stage.",
      impact:
        "97% data accuracy across 500+ records and reporting time cut from 6 hours to 30 minutes.",
    },
  },
  {
    id: "covid",
    no: "04",
    title: "SQL Data Exploration: COVID-19 Analysis",
    category: "SQL • Data Analysis",
    image: projSql,
    description:
      "Exploratory analysis of global COVID-19 infection, death, and vaccination trends.",
    tech: ["SQL", "Joins", "Aggregations", "Window Functions"],
    impact: ["Global trend comparison", "Rolling vaccination analysis"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Tawfiq-Alh/SQL-Data-Exploration---COVID-19-Analysis---Portfolio",
      },
    ],
    caseStudy: {
      challenge:
        "Large, multi-source public health datasets that resist quick answers about how regions actually compared.",
      approach:
        "Queried infection, death and vaccination data directly in SQL, layering aggregations and window functions to expose trends over time.",
      technology: "SQL: joins, CTEs, aggregations, window functions.",
      solution:
        "A documented exploration set answering comparative questions on infection rate, mortality and vaccination coverage.",
      impact: "A reusable query pattern for exploring any large time-series public dataset.",
    },
  },
  {
    id: "nashville",
    no: "05",
    title: "Nashville Housing Data Cleaning",
    category: "SQL • Data Cleaning",
    image: projSql,
    description:
      "Cleaned and standardized a real-world housing dataset in SQL — null handling, duplicate detection, and inconsistent formatting.",
    tech: ["SQL"],
    impact: ["Standardized addresses", "Duplicates removed", "Analysis-ready dataset"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Tawfiq-Alh/Data-Cleaning-in-SQL---Nashville-Housing-Dataset",
      },
    ],
    caseStudy: {
      challenge:
        "A real-world property dataset full of nulls, duplicate records and inconsistent address formatting — unusable as delivered.",
      approach:
        "Profiled the dataset column by column, then wrote deterministic, repeatable cleaning steps rather than one-off manual fixes.",
      technology: "SQL: string parsing, CASE logic, CTEs, ROW_NUMBER deduplication.",
      solution: "A fully scripted cleaning pipeline producing an analysis-ready housing table.",
      impact: "A dataset that can be trusted for downstream analysis, with every transformation auditable.",
    },
  },
  {
    id: "suite",
    no: "06",
    title: "Power BI Analytics Suite",
    category: "Power BI • Business Intelligence",
    image: projBi,
    description:
      "A collection of business dashboards: HR Analytics, Sales performance, and a Data Professional Survey breakdown.",
    tech: ["Power BI", "DAX"],
    impact: ["3 domain dashboards", "Reusable DAX patterns"],
    links: [
      { label: "HR Analytics", href: "https://github.com/Tawfiq-Alh/PowerBi-HR_Analytics_Dashboard" },
      { label: "Sales Dashboard", href: "https://github.com/Tawfiq-Alh/Power-BI-Sales-Dashboard" },
      {
        label: "Survey Breakdown",
        href: "https://github.com/Tawfiq-Alh/Power-Bi-Data-Professional-Survey-Breakdown",
      },
    ],
    caseStudy: {
      challenge:
        "Three very different business domains — people, revenue and community survey data — each needing its own analytical lens.",
      approach:
        "Built each dashboard around the questions its audience asks first, keeping the modelling and DAX patterns consistent across all three.",
      technology: "Power BI, DAX, data modelling, interactive slicers and drill-through.",
      solution:
        "HR attrition and workforce analytics, a sales performance dashboard, and a survey breakdown of the data profession.",
      impact: "A repeatable dashboard template that shortens delivery for every new domain.",
    },
  },
  {
    id: "bike",
    no: "07",
    title: "Bike Sales Dashboard",
    category: "Excel • Business Analytics",
    image: projExcel,
    description: "An interactive Excel dashboard analyzing sales trends and business performance.",
    tech: ["Advanced Excel", "Pivot Tables", "Dashboards"],
    impact: ["Interactive filtering", "Trend and segment analysis"],
    links: [{ label: "GitHub", href: "https://github.com/Tawfiq-Alh/Bike-Sales-Dashboard-Excel" }],
    caseStudy: {
      challenge:
        "A raw sales dataset with no clear view of which customer segments actually drive purchases.",
      approach:
        "Cleaned and categorized the data, then built pivot-driven views around demographic and behavioural segments.",
      technology: "Advanced Excel, pivot tables, slicers, chart dashboards.",
      solution: "An interactive Excel dashboard with filterable segment and trend analysis.",
      impact: "Sales patterns readable in seconds by a non-technical stakeholder.",
    },
  },
];
