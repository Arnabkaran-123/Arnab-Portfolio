import { ExperienceItem, SkillCategory, ProjectItem, DatabaseDemo } from '../types';

export const PERSONAL_INFO = {
  name: "Arnab Karan",
  initials: "AK",
  title: "Project Engineer at C-DAC | Full-Stack & Database Developer",
  tagline: "Architecting high-concurrency government systems, resilient relational databases, and enterprise web solutions.",
  bio: "Senior full-stack and database specialist with 10+ years of professional engineering experience. Proven expertise in building state-scale mission-critical applications (such as WAMIS and CDMS for government departments), designing complex MySQL stored procedure ecosystems, implementing airtight enterprise security, and delivering performant end-to-end web workflows.",
  location: "Cuttack / Bhubaneswar, Odisha, India",
  email: "arnab.east@gmail.com",
  availability: "Available for Technical Discussions & Enterprise Consultation",
  stats: [
    { label: "Years of Experience", value: "10+", suffix: "Years" },
    { label: "Govt & Enterprise Systems", value: "8+", suffix: "State Scale" },
    { label: "DB Query Optimization", value: "75%", suffix: "Latency Drop" },
    { label: "Daily Transactions Processed", value: "150k+", suffix: "Records" }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:arnab.east@gmail.com"
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "cdac",
    role: "Project Engineer",
    company: "Centre for Development of Advanced Computing (C-DAC)",
    companyShort: "C-DAC",
    location: "Bhubaneswar / Cuttack, Odisha, India",
    period: "April 2021 – Present",
    isCurrent: true,
    type: "Full-time",
    description: "Leading technical module engineering, database architecture, and backend system integrations for large-scale e-Governance systems commissioned by state and central government bodies.",
    highlights: [
      "Engineered core modules for state-level Works & Accounts Management Information System (WAMIS) facilitating contractor bills, project budgets, and ledger reconciliations.",
      "Architected relational schema architectures, multi-tenant partitioning strategies, and complex MySQL Stored Procedures handling millions of monthly financial records.",
      "Implemented enterprise web security hardening, strict role-based access control (RBAC), and IP-whitelisting algorithms for sensitive administrative portals.",
      "Integrated automated reporting pipelines using JasperReports / iReport to generate official state-format PDF vouchers, expenditure statements, and audit reports.",
      "Conducted thorough query profiling, index optimization, and transaction tuning, reducing heavy financial aggregation batch jobs from minutes down to seconds."
    ],
    techStack: ["MySQL", "Stored Procedures", "PHP (MVC)", "JasperReports", "iReport", "Web Security", "IP Whitelisting", "JavaScript", "HTML5/CSS3", "Linux/Apache"],
    metrics: [
      { label: "Public Works Portals", value: "Statewide" },
      { label: "Query Execution Boost", value: "Up to 80%" },
      { label: "Security Audit Status", value: "Compliant" }
    ]
  },
  {
    id: "csm",
    role: "Software Engineer",
    company: "CSM Technologies",
    companyShort: "CSM Tech",
    location: "Bhubaneswar, Odisha, India",
    period: "Dec 2019 – April 2021",
    type: "Full-time",
    description: "Developed and maintained mission-critical enterprise web applications, workflow automation tools, and customized reporting engines for government and public sector clientele.",
    highlights: [
      "Contributed to the Contract & Document Management System (CDMS) streamlining digital tenders, agreement lifecycle states, and milestone inspections.",
      "Built resilient dynamic backend APIs and modular PHP components interfacing with MySQL database backplanes.",
      "Designed dynamic approval matrices and state-machine workflows for administrative file clearances and departmental sign-offs.",
      "Collaborated closely with cross-functional system analysts to translate complex government circulars and accounting rules into programmatic logic."
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "jQuery", "Bootstrap", "AJAX", "Git", "REST APIs", "SQL Performance Tuning"],
    metrics: [
      { label: "Workflow Systems", value: "Multi-Department" },
      { label: "Process Time Reduction", value: "60%" }
    ]
  },
  {
    id: "bikash",
    role: "PHP / Web Developer",
    company: "Bikash Infosystem",
    companyShort: "Bikash Info",
    location: "Cuttack / Bhubaneswar, Odisha, India",
    period: "2014 – Dec 2019",
    type: "Full-time",
    description: "Engineered bespoke database-driven web applications, dynamic customer management portals, and customized CMS platforms for regional businesses and institutional clients.",
    highlights: [
      "Built over 20+ full-stack dynamic PHP & MySQL applications with custom administrative dashboards and role-specific permissions.",
      "Optimized legacy databases, migrating monolithic unindexed schemas into normalized relational tables with integrity constraints and foreign keys.",
      "Developed custom WordPress themes, plugins, and custom post-type backends tailored for high-traffic informational sites.",
      "Managed on-premise cPanel/Linux server configurations, SSL certificate provisioning, MySQL backup cron scripts, and website performance tune-ups."
    ],
    techStack: ["PHP", "MySQL", "WordPress", "JavaScript", "HTML5", "CSS3", "Apache", "phpMyAdmin", "cPanel"],
    metrics: [
      { label: "Client Solutions Delivered", value: "20+" },
      { label: "Uptime & Maintenance", value: "99.9%" }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "database",
    name: "Database & Backend Engineering",
    iconName: "Database",
    description: "Relational database modeling, query tuning, transaction management, and stored logic.",
    skills: [
      { name: "MySQL / MariaDB", level: "Expert", years: 10, tag: "Primary RDBMS", description: "Complex joins, views, partitioning, indexing strategies, and server configuration." },
      { name: "Stored Procedures & Triggers", level: "Expert", years: 9, tag: "High Performance", description: "Encapsulated business logic, atomic multi-step transactions, and automated audit logging." },
      { name: "Database Performance Tuning", level: "Expert", years: 8, tag: "Optimization", description: "EXPLAIN ANALYZE, composite indexes, query refactoring, and buffer pool optimization." },
      { name: "PHP (Core & MVC)", level: "Expert", years: 10, tag: "Backend", description: "Object-oriented PHP, PDO data abstraction, session management, and custom MVC patterns." },
      { name: "Java / Spring (Basics)", level: "Proficient", years: 3, tag: "Enterprise", description: "JasperReports integration, backend service consumption, and enterprise tools." },
      { name: "RESTful API Design", level: "Advanced", years: 6, tag: "Integration", description: "JSON endpoint design, authentication tokens, rate-limiting, and error contracts." }
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise Systems & Governance",
    iconName: "Building2",
    description: "Architecting large-scale public administration systems, reporting, and workflow automation.",
    skills: [
      { name: "Govt Systems (WAMIS & CDMS)", level: "Expert", years: 5, tag: "Domain Expertise", description: "Works & Accounts Management, budget allocations, contractor measurements, and billing cycles." },
      { name: "JasperReports / iReport", level: "Expert", years: 4, tag: "Reporting", description: "Complex multi-band financial reports, sub-reports, custom parameters, and pixel-perfect PDF exports." },
      { name: "Workflow Engines & State Machines", level: "Advanced", years: 6, tag: "Automation", description: "Multi-tier approval chains, conditional routing, and audit trail record keeping." },
      { name: "Web Security & IP Whitelisting", level: "Expert", years: 6, tag: "Security", description: "IP restriction layers, SQL injection prevention, XSS mitigation, CSRF token verification." },
      { name: "Audit Trail & Compliance", level: "Advanced", years: 5, tag: "Compliance", description: "Immutable activity logs, change diff records, and fiscal audit compliance modules." }
    ]
  },
  {
    id: "frontend",
    name: "Frontend & Modern Web",
    iconName: "Layout",
    description: "Building responsive, accessible, and fast user interfaces with modern toolchains.",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", years: 9, tag: "Core Language", description: "DOM manipulation, asynchronous fetch APIs, event loops, and modular code." },
      { name: "Tailwind CSS", level: "Advanced", years: 4, tag: "Styling", description: "Utility-first design systems, responsive layouts, dark/light theming, and clean typography." },
      { name: "HTML5 & CSS3", level: "Expert", years: 10, tag: "Foundational", description: "Semantic markup, CSS Grid, Flexbox, print-optimized media styles, and WCAG accessibility." },
      { name: "React / Modern UI", level: "Advanced", years: 4, tag: "UI Framework", description: "Component-driven architecture, custom hooks, reactive state handling, and motion animations." },
      { name: "AJAX / Fetch API", level: "Expert", years: 9, tag: "Data Sync", description: "Non-blocking client-server data synchronization with rich client-side error states." }
    ]
  },
  {
    id: "tools",
    name: "Tools, DevOps & Utilities",
    iconName: "Wrench",
    description: "Environment setup, version control, server maintenance, and tooling.",
    skills: [
      { name: "Git & Version Control", level: "Advanced", years: 8, tag: "VCS", description: "Branching strategies, code reviews, rebasing, and repository management." },
      { name: "Linux / Ubuntu Server", level: "Advanced", years: 7, tag: "System Admin", description: "Apache/Nginx configuration, permissions, shell scripts, and cron task automation." },
      { name: "MySQL Workbench & Profiler", level: "Expert", years: 9, tag: "DB Tools", description: "EER modeling, schema synchronization, query execution plan inspection." },
      { name: "Vercel & Modern Deployment", level: "Advanced", years: 4, tag: "Deployment", description: "Static site hosting, automated builds, CDN edge routing, and environment secrets." },
      { name: "Postman & API Testing", level: "Advanced", years: 6, tag: "QA", description: "Endpoint assertion tests, automated test collections, and header validation." }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "wamis-core",
    title: "WAMIS - Works & Accounts Management Information System",
    subtitle: "State-Level Public Infrastructure & Financial Tracking Engine",
    category: "Government System",
    organization: "C-DAC (Commissioned for State Government)",
    period: "2021 – Present",
    impactScore: "100k+ Transactions / Month",
    summary: "A comprehensive e-Governance enterprise platform managing public infrastructure works from administrative approval, estimate preparation, contractor measurement book (M-Book), to financial voucher generation and ledger disbursement.",
    problem: "Manual and decentralized processing of public works accounts resulted in accounting reconciliation discrepancies, contractor payment bottlenecks, and delayed budget oversight.",
    solution: "Engineered a centralized, highly normalized relational database backplane coupled with high-speed stored procedures, multi-level departmental authorization, and automated ledger compilation.",
    architectureHighlights: [
      "Transactional stored procedures ensuring atomic ledger debits and credits across multiple budgetary heads.",
      "Department-level IP whitelisting preventing unauthorized external administrative access.",
      "Dynamic measurement book verification logic with automated deduction of royalties, GST, and labor welfare cess.",
      "Direct integration with JasperReports for generating standardized state audit bills and challans."
    ],
    techStack: ["MySQL", "Stored Procedures", "PHP MVC", "JasperReports", "Web Security", "Linux Server", "JavaScript"],
    keyFeatures: [
      "Contractor Billing & M-Book digitization",
      "Budget allotment & expenditure ceiling tracking",
      "Automated Treasury voucher generation",
      "Role-based multi-tier clearance hierarchy",
      "Comprehensive audit trail & historical logs"
    ],
    codeSnippet: {
      title: "Sample Stored Procedure: Atomic Bill Disbursement Verification",
      language: "sql",
      code: `DELIMITER //
CREATE PROCEDURE sp_DisburseContractorBill(
    IN p_BillId INT,
    IN p_ApprovedBy INT,
    IN p_DisbursedAmount DECIMAL(14,2),
    OUT p_StatusCode INT,
    OUT p_StatusMessage VARCHAR(255)
)
BEGIN
    DECLARE v_CurrentStatus VARCHAR(30);
    DECLARE v_BudgetAvailable DECIMAL(14,2);
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SET p_StatusCode = 500;
        SET p_StatusMessage = 'Transaction Rolled Back: Internal Error';
    END;

    START TRANSACTION;
    -- Step 1: Verify Bill State and Lock Row
    SELECT bill_status INTO v_CurrentStatus 
    FROM tbl_contractor_bills 
    WHERE bill_id = p_BillId FOR UPDATE;

    IF v_CurrentStatus = 'VERIFIED_AUDIT' THEN
        -- Step 2: Update Bill State & Insert Ledger Entry
        UPDATE tbl_contractor_bills 
        SET bill_status = 'DISBURSED', 
            disbursed_date = NOW(), 
            authorized_officer_id = p_ApprovedBy
        WHERE bill_id = p_BillId;

        INSERT INTO tbl_accounts_ledger (bill_id, debit_amount, trans_time, trans_type)
        VALUES (p_BillId, p_DisbursedAmount, NOW(), 'EXPENDITURE_DISBURSED');

        COMMIT;
        SET p_StatusCode = 200;
        SET p_StatusMessage = 'Bill Disbursed Successfully & Ledger Updated';
    ELSE
        ROLLBACK;
        SET p_StatusCode = 400;
        SET p_StatusMessage = 'Error: Bill not in verified audit state';
    END IF;
END //
DELIMITER ;`
    }
  },
  {
    id: "cdms-workflow",
    title: "CDMS - Contract & Document Management System",
    subtitle: "Enterprise Workflow & Digital Agreement Tracking",
    category: "Enterprise Solution",
    organization: "CSM Technologies & Client Deployments",
    period: "2020 – 2021",
    impactScore: "60% Cycle Time Reduction",
    summary: "Enterprise-grade digital workflow system automating contract lifecycles, contractor credential verifications, performance guarantees, and departmental milestone notifications.",
    problem: "Government and enterprise organizations struggled with physical paper-bound document routing, missing contract expiration alerts, and unverified contractor compliance certificates.",
    solution: "Designed an interactive state-machine document engine with dynamic routing rules, automated email/SMS escalation alerts, and tamper-resistant document archiving.",
    architectureHighlights: [
      "Configurable sequential and parallel departmental approval workflows.",
      "Cryptographic checksum verification for uploaded tender agreements.",
      "Optimized search indices over thousands of active departmental files."
    ],
    techStack: ["PHP", "MySQL", "jQuery", "Bootstrap", "REST API", "Database Optimization", "Linux"],
    keyFeatures: [
      "Visual document timeline and status tracking",
      "Automated milestone expiration alerts",
      "Role-based privilege elevation system",
      "Digital agreement verification & compliance check"
    ]
  },
  {
    id: "db-optimization-engine",
    title: "Enterprise SQL Optimization & Aggregation Suite",
    subtitle: "High-Throughput Financial Calculation Engine",
    category: "Database Architecture",
    organization: "C-DAC High Performance Modules",
    period: "2022 – Present",
    impactScore: "75% Latency Reduction",
    summary: "A specialized performance tuning initiative that analyzed slow-query telemetry, redesigned indexing strategies, and converted PHP-level looping calculations into database-native stored routines.",
    problem: "Month-end state-wide accounting aggregations were experiencing query timeouts (taking up to 45 seconds per batch) under heavy concurrent multi-department loads.",
    solution: "Introduced composite B-Tree indexing on temporal and foreign key columns, utilized temporary aggregation tables with memory tables, and restructured nested subqueries into single-pass stored procedures.",
    architectureHighlights: [
      "Replaced N+1 PHP query patterns with bulk stored procedure execution.",
      "Implemented partitioned tables for multi-year historical transactions.",
      "Achieved sub-second query response times for multi-million row financial ledgers."
    ],
    techStack: ["MySQL", "Stored Procedures", "Query Profiling", "EXPLAIN ANALYZE", "B-Tree Indexes", "Database Architecture"],
    keyFeatures: [
      "Sub-second report aggregations over 5M+ row datasets",
      "Optimized locking mechanisms preventing table-level deadlocks",
      "Automated partition creation cron scripts",
      "Comprehensive query profiling test benches"
    ]
  },
  {
    id: "jasper-report-engine",
    title: "Automated Government Ledger & Voucher Generation Engine",
    subtitle: "Multi-Format Pixel-Perfect State Reporting Service",
    category: "Government System",
    organization: "C-DAC Integration",
    period: "2022 – 2024",
    impactScore: "10,000+ Daily PDF Vouchers",
    summary: "Mission-critical reporting subsystem using JasperReports / iReport to dynamically generate legal state treasury vouchers, treasury schedules, and annual department balances with precise formatting.",
    problem: "Formatting regulatory compliance required strict alignment with official state gazette templates, dynamic pagination, and barcode/QR code watermarking.",
    solution: "Configured parameter-driven JasperReport templates invoked via backend controllers, seamlessly populating multi-table datasets into PDF, XLSX, and print buffers.",
    architectureHighlights: [
      "Custom sub-report architecture for nested deduction line items.",
      "Memory-efficient streaming PDF generation avoiding server heap exhaust.",
      "Standardized header/footer templates maintaining official state branding."
    ],
    techStack: ["JasperReports", "iReport", "Java", "PHP Backend Bridge", "MySQL", "XML Templates"],
    keyFeatures: [
      "Automated Treasury Challan generation",
      "Contractor deduction schedules (GST, IT, Royality)",
      "High-speed batch PDF export queue",
      "Pixel-perfect print layouts for official dot-matrix and laser printers"
    ]
  },
  {
    id: "security-ip-shield",
    title: "Enterprise Web Security & IP Restriction Gatekeeper",
    subtitle: "Multi-Tier Access Control & Audit Defense System",
    category: "Enterprise Solution",
    organization: "State Application Modules",
    period: "2021 – Present",
    impactScore: "Zero Unauthorized Breaches",
    summary: "A robust security middleware designed to safeguard government administrative consoles against unauthorized external IP ranges, brute-force attempts, and credential misuse.",
    problem: "Sensitive government financial portals required strict geographical and department-specific IP access control without impairing legitimate mobile field engineers.",
    solution: "Developed an intelligent IP-filtering layer supporting subnet ranges, dynamic OTP step-up authentication for secondary IP ranges, and real-time intrusion logging.",
    architectureHighlights: [
      "Sub-millisecond IP lookup using binary subnet mask matching in MySQL.",
      "Automated temporary IP blacklisting after repeated failed attempts.",
      "Comprehensive request audit headers tracking source IPs, agents, and timestamps."
    ],
    techStack: ["PHP", "MySQL", "Web Security", "IP Whitelisting", "CSRF Protection", "Session Hardening"],
    keyFeatures: [
      "Dynamic CIDR block and single-IP authorization",
      "Real-time security alert telemetry",
      "Tamper-proof administrative action audit log",
      "Cross-Site Request Forgery (CSRF) & SQLi sanitization wrapper"
    ]
  },
  {
    id: "dynamic-cms-portal",
    title: "Institutional E-Governance & Information Portals",
    subtitle: "Public Citizen Services & Dynamic Content Systems",
    category: "Web Applications",
    organization: "Bikash Infosystem",
    period: "2016 – 2019",
    impactScore: "20+ Live Deployments",
    summary: "Suite of dynamic web portals providing citizen services, institutional notices, online forms, and administrative content management.",
    problem: "Institutions required dependable, lightweight content management systems capable of running on affordable hosting while maintaining fast page loads and security.",
    solution: "Crafted modular PHP/MySQL architectures and custom CMS themes featuring responsive navigation, instant search, and automated media optimization.",
    architectureHighlights: [
      "Modular database schema with intuitive administrative dashboards.",
      "Optimized MySQL queries for fast categorical lookups."
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Apache", "WordPress"],
    keyFeatures: [
      "Notice & tender publishing engine",
      "Citizen feedback and inquiry tracking",
      "Responsive mobile-first layout",
      "Automated daily database backups"
    ]
  }
];

export const DATABASE_DEMOS: DatabaseDemo[] = [
  {
    id: "demo-1",
    title: "State Budget Allocation Ledger Aggregation",
    scenario: "Aggregating 2.4 Million expenditure rows across 30 District Divisions with monthly breakdown.",
    technique: "Composite Indexing `(dept_id, fiscal_year, trans_status, trans_date)` + Pre-filtered Stored Routine",
    impact: "94% execution time reduction, eliminated full table scans",
    latencyDrop: "4.8s → 0.18s",
    beforeQuery: `-- Slow unindexed nested query causing full table scan (2.4M rows)
SELECT d.dept_name, SUM(e.amount) as total_expenditure
FROM tbl_departments d
JOIN tbl_expenditures e ON d.dept_id = e.dept_id
WHERE YEAR(e.trans_date) = 2024 
  AND e.trans_status = 'APPROVED'
GROUP BY d.dept_name;`,
    afterQuery: `-- Optimized Query utilizing Composite Index & Date Range Slicing
SELECT d.dept_name, SUM(e.amount) as total_expenditure
FROM tbl_departments d
JOIN tbl_expenditures e USE INDEX (idx_dept_year_status) 
  ON d.dept_id = e.dept_id
WHERE e.trans_date >= '2024-01-01 00:00:00' 
  AND e.trans_date < '2025-01-01 00:00:00'
  AND e.trans_status = 'APPROVED'
GROUP BY d.dept_id, d.dept_name;`
  },
  {
    id: "demo-2",
    title: "Atomic Contractor Payment with Real-time Deduction Calculation",
    scenario: "Calculating multi-tier taxes (Royalty, GST TDS, Labor Welfare Cess) and updating ledger atomically.",
    technique: "Encapsulated MySQL Stored Procedure with `START TRANSACTION` & Row-level Lock",
    impact: "Eliminated concurrency race conditions & reduced 7 API roundtrips to 1 stored procedure invocation.",
    latencyDrop: "320ms → 18ms",
    beforeQuery: `-- Multi-step client-side looping causing latency and race conditions
-- Step 1: Query bill
-- Step 2: Compute deductions in application layer
-- Step 3: Issue separate UPDATE and INSERT queries across HTTP network`,
    afterQuery: `-- Single-pass Atomic Stored Procedure Execution
CALL sp_ComputeDeductionsAndDisburse(
  p_BillId := 10482,
  p_OfficerId := 52,
  @statusCode, 
  @netDisbursed
);`
  }
];
