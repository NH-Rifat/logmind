// Sample log search data
export const popularSearches = [
  { name: "Error logs", count: 1245 },
  { name: "API responses", count: 876 },
  { name: "Database queries", count: 543 },
  { name: "Authentication logs", count: 1892 },
  { name: "Performance metrics", count: 765 },
  { name: "System events", count: 1123 },
];

// Sample log search results
export const searchResults = [
  {
    id: 1,
    name: "Critical Authentication Error",
    timestamp: "2025-01-15 14:32:01",
    level: "ERROR",
    source: "auth-service",
    message: "Failed login attempt from IP 192.168.1.100",
    status: "active",
    severity: "high",
  },
  {
    id: 2,
    name: "Database Connection Warning",
    timestamp: "2025-01-15 14:31:45",
    level: "WARN",
    source: "db-pool",
    message: "Connection pool near capacity (90%)",
    status: "active",
    severity: "medium",
  },
  {
    id: 3,
    name: "API Response Time Alert",
    timestamp: "2025-01-15 14:31:30",
    level: "INFO",
    source: "api-gateway",
    message: "Response time exceeded threshold: 2.5s",
    status: "resolved",
    severity: "low",
  },
  {
    id: 4,
    name: "System Memory Usage",
    timestamp: "2025-01-15 14:31:15",
    level: "DEBUG",
    source: "system-monitor",
    message: "Memory usage at 75% capacity",
    status: "monitoring",
    severity: "low",
  },
];

// Animated placeholder texts
export const placeholderTexts = [
  "ERROR authentication failed",
  "API response time > 2s",
  "Database connection lost",
  "Memory usage critical",
];

// Platform advantages data
export const platformAdvantages = [
  {
    title: "Faster Debugging",
    description: "Reduce debugging time by up to 80% with intelligent log analysis and search",
    icon: "Clock",
  },
  {
    title: "Cost Reduction",
    description: "Lower operational costs with automated monitoring and early issue detection",
    icon: "DollarSign",
  },
  {
    title: "Real-time Monitoring",
    description: "Monitor your applications 24/7 with instant alerts and notifications",
    icon: "RefreshCw",
  },
  {
    title: "AI-Powered Insights",
    description: "Get intelligent insights and anomaly detection powered by machine learning",
    icon: "Sparkles",
  },
];

// How it works steps
export const howItWorksSteps = [
  {
    icon: "Search",
    title: "Integrate Your Apps",
    description: "Connect your applications using our simple API to start streaming logs to LogMind platform",
    benefits: [
      "Easy SDK integration for all major languages",
      "Real-time log streaming",
      "Secure encrypted data transmission",
    ],
  },
  {
    icon: "Layers",
    title: "Monitor & Search",
    description: "Use powerful search capabilities and real-time dashboards to monitor your application health",
    benefits: [
      "Advanced query language for precise filtering",
      "Real-time alerts and notifications",
      "Custom dashboards and visualizations",
    ],
  },
  {
    icon: "Zap",
    title: "Analyze & Optimize",
    description: "Leverage AI insights to identify patterns, detect anomalies, and optimize your application performance",
    benefits: [
      "AI-powered anomaly detection",
      "Performance trend analysis",
      "Automated issue resolution suggestions",
    ],
  },
];

// Pricing plans
export const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for small projects",
    features: [
      "Up to 1GB log storage per month",
      "7-day log retention",
      "Basic search and filtering",
      "Email support",
      "1 application integration",
    ],
    cta: "Start Free",
    popular: false,
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    name: "Professional",
    price: "$29/month",
    description: "For growing businesses",
    features: [
      "Up to 50GB log storage per month",
      "30-day log retention",
      "Advanced search and AI insights",
      "Real-time alerts and monitoring",
      "Up to 10 application integrations",
      "Priority support",
    ],
    cta: "Start Trial",
    popular: true,
    color: "from-blue-500/40 via-blue-500/30 to-blue-500/40",
  },
  {
    name: "Enterprise",
    price: "$99/month",
    description: "For large organizations",
    features: [
      "Unlimited log storage",
      "Custom log retention policies",
      "Advanced AI analytics and predictions",
      "Custom dashboards and reports",
      "Unlimited application integrations",
      "24/7 dedicated support",
      "SSO and advanced security",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "from-blue-500/20 to-blue-500/5",
  },
];

// Integration benefits
export const integrationBenefits = [
  {
    title: "Simple SDK Integration",
    description: "Easy-to-use SDKs for all major programming languages with comprehensive documentation",
  },
  {
    title: "Real-time Streaming",
    description: "Stream your application logs in real-time with high throughput and low latency",
  },
  {
    title: "Advanced Analytics API",
    description: "Access powerful analytics and AI insights through our comprehensive REST API",
  },
  {
    title: "Enterprise Support",
    description: "Dedicated technical support, SLAs, and custom onboarding assistance",
  },
];

// Platform statistics
export const platformStatistics = [
  { label: "Faster issue resolution", value: "+80%" },
  { label: "Reduced debugging time", value: "+65%" },
  { label: "Operational cost savings", value: "-45%" },
];

// Real-time dashboard data
export const dashboardMetrics = [
  {
    value: "24",
    label: "Critical Errors",
    color: "red",
  },
  {
    value: "156",
    label: "Warnings",
    color: "yellow",
  },
  {
    value: "2.3K",
    label: "Info Messages",
    color: "blue",
  },
  {
    value: "99.9%",
    label: "Uptime",
    color: "green",
  },
];

// Recent events for dashboard
export const recentEvents = [
  { time: "14:32", level: "ERROR", msg: "Auth failed" },
  { time: "14:31", level: "WARN", msg: "DB pool capacity" },
  { time: "14:30", level: "INFO", msg: "API response slow" },
];

// Active services for dashboard
export const activeServices = ["API Gateway", "Auth Service", "Database", "Cache"];

// AI features
export const aiFeatures = [
  "Natural language log search queries",
  "Automatic anomaly detection and alerting",
  "Predictive analysis for performance optimization",
];

// Navigation links
export const navigationLinks = [
  { id: "search", label: "Platform" },
  { id: "how", label: "How it works" },
  { id: "pricing", label: "Pricing" },
  { id: "business", label: "API" },
];

// Footer links
export const footerLinks = [
  { href: "#", label: "Documentation" },
  { href: "#", label: "API Reference" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Support" },
];
