import { PromptCategory } from '@/types';

export const promptCategories: PromptCategory[] = [
  {
    id: 'strategy',
    title: 'Strategy Development',
    description: 'Define your business strategy, mission, and competitive positioning',
    icon: '🎯',
    prompts: [
      {
        id: 'business-model-evaluation',
        title: 'Business Model Evaluation',
        description: 'Evaluate whether you need a traditional business plan or lean startup approach',
        category: 'strategy',
        template: `I'm considering starting a {businessType}. Based on these factors:
- Target market: {targetMarket}
- Initial capital: {initialCapital}
- Timeline: {timeline}
- Resources: {resources}
- Goals: {goals}

Help me evaluate whether I need a traditional business plan or a lean startup approach. Provide a detailed analysis with pros and cons of each approach for my specific situation.`,
        fields: [
          {
            id: 'businessType',
            label: 'Type of Business',
            type: 'text',
            placeholder: 'e.g., SaaS platform, retail store, consulting service',
            required: true,
          },
          {
            id: 'targetMarket',
            label: 'Target Market',
            type: 'textarea',
            placeholder: 'Describe your target market...',
            required: true,
          },
          {
            id: 'initialCapital',
            label: 'Initial Capital',
            type: 'text',
            placeholder: 'e.g., $50,000',
            required: true,
          },
          {
            id: 'timeline',
            label: 'Timeline',
            type: 'text',
            placeholder: 'e.g., 6 months to launch',
            required: true,
          },
          {
            id: 'resources',
            label: 'Available Resources',
            type: 'textarea',
            placeholder: 'List your available resources...',
            required: true,
          },
          {
            id: 'goals',
            label: 'Main Objectives',
            type: 'textarea',
            placeholder: 'List your main business objectives...',
            required: true,
          },
        ],
      },
      {
        id: 'mission-vision',
        title: 'Mission & Vision Development',
        description: 'Craft compelling mission and vision statements',
        category: 'strategy',
        template: `I'm creating a mission and vision statement for my {businessType}. Here's what makes us unique:
- Key offerings: {offerings}
- Target audience: {audience}
- Core values: {values}
- Long-term goals: {longTermGoals}

Help me craft compelling mission and vision statements that are specific, memorable, and aligned with my business goals.`,
        fields: [
          {
            id: 'businessType',
            label: 'Type of Business',
            type: 'text',
            placeholder: 'e.g., sustainable fashion brand',
            required: true,
          },
          {
            id: 'offerings',
            label: 'Key Offerings',
            type: 'textarea',
            placeholder: 'List your products/services...',
            required: true,
          },
          {
            id: 'audience',
            label: 'Target Audience',
            type: 'textarea',
            placeholder: 'Describe your ideal customers...',
            required: true,
          },
          {
            id: 'values',
            label: 'Core Values',
            type: 'textarea',
            placeholder: 'List your core values...',
            required: true,
          },
          {
            id: 'longTermGoals',
            label: 'Long-term Goals',
            type: 'textarea',
            placeholder: 'Describe your future aspirations...',
            required: true,
          },
        ],
      },
      {
        id: 'competitive-analysis',
        title: 'Competitive Analysis',
        description: 'Analyze competitors and identify market opportunities',
        category: 'strategy',
        template: `I need to analyze my competitors in the {industry}. Here's what I know:
- Direct competitors: {competitors}
- Market size: {marketSize}
- Current market leaders: {marketLeaders}
- My unique value proposition: {uvp}

Help me conduct a thorough competitive analysis, identifying gaps in the market and potential opportunities for differentiation.`,
        fields: [
          {
            id: 'industry',
            label: 'Industry/Market',
            type: 'text',
            placeholder: 'e.g., online education',
            required: true,
          },
          {
            id: 'competitors',
            label: 'Direct Competitors',
            type: 'textarea',
            placeholder: 'List your main competitors...',
            required: true,
          },
          {
            id: 'marketSize',
            label: 'Market Size',
            type: 'textarea',
            placeholder: 'Provide market size details...',
            required: true,
          },
          {
            id: 'marketLeaders',
            label: 'Market Leaders',
            type: 'textarea',
            placeholder: 'List top companies in your market...',
            required: true,
          },
          {
            id: 'uvp',
            label: 'Unique Value Proposition',
            type: 'textarea',
            placeholder: 'Describe what makes you different...',
            required: true,
          },
        ],
      },
    ],
  },
  {
    id: 'market-research',
    title: 'Market Research',
    description: 'Understand your market, customers, and opportunities',
    icon: '📊',
    prompts: [
      {
        id: 'target-market-analysis',
        title: 'Target Market Analysis',
        description: 'Develop detailed customer personas',
        category: 'market-research',
        template: `Help me develop detailed customer personas for my {businessType}. Consider:
- Demographics: {demographics}
- Pain points: {painPoints}
- Buying behaviors: {buyingBehaviors}
- Current solutions they use: {currentSolutions}

Provide comprehensive personas and strategies for reaching each customer segment.`,
        fields: [
          {
            id: 'businessType',
            label: 'Business Type',
            type: 'text',
            placeholder: 'e.g., B2B software',
            required: true,
          },
          {
            id: 'demographics',
            label: 'Demographics',
            type: 'textarea',
            placeholder: 'List key demographic characteristics...',
            required: true,
          },
          {
            id: 'painPoints',
            label: 'Pain Points',
            type: 'textarea',
            placeholder: 'Describe problems they face...',
            required: true,
          },
          {
            id: 'buyingBehaviors',
            label: 'Buying Behaviors',
            type: 'textarea',
            placeholder: 'Describe purchasing patterns...',
            required: true,
          },
          {
            id: 'currentSolutions',
            label: 'Current Solutions',
            type: 'textarea',
            placeholder: 'List alternatives they currently use...',
            required: true,
          },
        ],
      },
      {
        id: 'market-size-calculation',
        title: 'Market Size Calculation',
        description: 'Calculate TAM, SAM, and SOM for your business',
        category: 'market-research',
        template: `I need to calculate my total addressable market (TAM) for {productService}. Here's my data:
- Geographic focus: {geographic}
- Customer segment: {segment}
- Price point: {pricePoint}
- Market trends: {trends}

Help me calculate TAM, SAM (Serviceable Addressable Market), and SOM (Serviceable Obtainable Market) with detailed explanations.`,
        fields: [
          {
            id: 'productService',
            label: 'Product/Service',
            type: 'text',
            placeholder: 'e.g., project management software',
            required: true,
          },
          {
            id: 'geographic',
            label: 'Geographic Focus',
            type: 'text',
            placeholder: 'e.g., North America',
            required: true,
          },
          {
            id: 'segment',
            label: 'Customer Segment',
            type: 'textarea',
            placeholder: 'Describe your customer segment...',
            required: true,
          },
          {
            id: 'pricePoint',
            label: 'Price Point',
            type: 'text',
            placeholder: 'e.g., $29-99/month',
            required: true,
          },
          {
            id: 'trends',
            label: 'Market Trends',
            type: 'textarea',
            placeholder: 'List relevant market trends...',
            required: true,
          },
        ],
      },
    ],
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    description: 'Project revenue, calculate costs, and plan your finances',
    icon: '💰',
    prompts: [
      {
        id: 'revenue-projection',
        title: 'Revenue Projection',
        description: 'Create realistic revenue projections for 3 years',
        category: 'financial-planning',
        template: `Help me create realistic revenue projections for the first 3 years of my {businessType}. Consider:
- Pricing strategy: {pricing}
- Sales channels: {channels}
- Market size: {marketSize}
- Growth assumptions: {growthAssumptions}

Generate monthly projections for Year 1 and quarterly for Years 2-3, including detailed assumptions and calculations.`,
        fields: [
          {
            id: 'businessType',
            label: 'Business Type',
            type: 'text',
            placeholder: 'e.g., subscription service',
            required: true,
          },
          {
            id: 'pricing',
            label: 'Pricing Strategy',
            type: 'textarea',
            placeholder: 'Describe your pricing approach...',
            required: true,
          },
          {
            id: 'channels',
            label: 'Sales Channels',
            type: 'textarea',
            placeholder: 'List your sales channels...',
            required: true,
          },
          {
            id: 'marketSize',
            label: 'Market Size',
            type: 'textarea',
            placeholder: 'Provide market size details...',
            required: true,
          },
          {
            id: 'growthAssumptions',
            label: 'Growth Assumptions',
            type: 'textarea',
            placeholder: 'List factors affecting growth...',
            required: true,
          },
        ],
      },
      {
        id: 'startup-costs',
        title: 'Startup Costs Analysis',
        description: 'Calculate comprehensive startup costs',
        category: 'financial-planning',
        template: `I need to calculate startup costs for my {businessType}. Include:
- Essential equipment: {equipment}
- Legal requirements: {legal}
- Location needs: {location}
- Initial inventory: {inventory}
- Marketing budget: {marketing}

Provide a detailed breakdown of all startup costs and suggest potential areas for cost optimization.`,
        fields: [
          {
            id: 'businessType',
            label: 'Business Type',
            type: 'text',
            placeholder: 'e.g., coffee shop',
            required: true,
          },
          {
            id: 'equipment',
            label: 'Essential Equipment',
            type: 'textarea',
            placeholder: 'List required equipment...',
            required: true,
          },
          {
            id: 'legal',
            label: 'Legal Requirements',
            type: 'textarea',
            placeholder: 'List permits, licenses, etc...',
            required: true,
          },
          {
            id: 'location',
            label: 'Location Needs',
            type: 'textarea',
            placeholder: 'Describe location requirements...',
            required: true,
          },
          {
            id: 'inventory',
            label: 'Initial Inventory',
            type: 'textarea',
            placeholder: 'Describe inventory needs (if applicable)...',
            required: false,
          },
          {
            id: 'marketing',
            label: 'Marketing Budget',
            type: 'textarea',
            placeholder: 'Describe initial marketing plans...',
            required: true,
          },
        ],
      },
    ],
  },
  {
    id: 'implementation',
    title: 'Implementation Strategy',
    description: 'Plan milestones, marketing, and execution steps',
    icon: '🚀',
    prompts: [
      {
        id: 'milestone-planning',
        title: 'Milestone Planning',
        description: 'Create a 12-month milestone plan',
        category: 'implementation',
        template: `Help me create a 12-month milestone plan for launching my {businessType}. Consider:
- Key objectives: {objectives}
- Available resources: {resources}
- Critical deadlines: {deadlines}
- Team capacity: {teamCapacity}

Develop a detailed timeline with specific milestones, actions required, and success metrics for each phase.`,
        fields: [
          {
            id: 'businessType',
            label: 'Business Type',
            type: 'text',
            placeholder: 'e.g., mobile app',
            required: true,
          },
          {
            id: 'objectives',
            label: 'Key Objectives',
            type: 'textarea',
            placeholder: 'List your main goals...',
            required: true,
          },
          {
            id: 'resources',
            label: 'Available Resources',
            type: 'textarea',
            placeholder: 'Describe your resources...',
            required: true,
          },
          {
            id: 'deadlines',
            label: 'Critical Deadlines',
            type: 'textarea',
            placeholder: 'List important dates...',
            required: true,
          },
          {
            id: 'teamCapacity',
            label: 'Team Capacity',
            type: 'textarea',
            placeholder: 'Describe your team...',
            required: true,
          },
        ],
      },
      {
        id: 'marketing-strategy',
        title: 'Marketing Strategy Development',
        description: 'Create a comprehensive marketing strategy',
        category: 'implementation',
        template: `I need a comprehensive marketing strategy for my {productService}. Consider:
- Target audience: {audience}
- Budget: {budget}
- Unique selling proposition: {usp}
- Competitors' strategies: {competitorStrategies}

Create a detailed marketing plan including channels, content strategy, budget allocation, and success metrics.`,
        fields: [
          {
            id: 'productService',
            label: 'Product/Service',
            type: 'text',
            placeholder: 'e.g., fitness coaching app',
            required: true,
          },
          {
            id: 'audience',
            label: 'Target Audience',
            type: 'textarea',
            placeholder: 'Describe your target audience...',
            required: true,
          },
          {
            id: 'budget',
            label: 'Budget',
            type: 'text',
            placeholder: 'e.g., $10,000/month',
            required: true,
          },
          {
            id: 'usp',
            label: 'Unique Selling Proposition',
            type: 'textarea',
            placeholder: 'Describe what makes you unique...',
            required: true,
          },
          {
            id: 'competitorStrategies',
            label: "Competitors' Strategies",
            type: 'textarea',
            placeholder: 'List known competitor approaches...',
            required: true,
          },
        ],
      },
    ],
  },
  {
    id: 'risk-analysis',
    title: 'Risk Analysis',
    description: 'Identify risks and develop contingency plans',
    icon: '⚠️',
    prompts: [
      {
        id: 'risk-assessment',
        title: 'Risk Assessment',
        description: 'Identify and analyze potential risks',
        category: 'risk-analysis',
        template: `Help me identify and analyze potential risks for my {businessType}. Consider:
- Market conditions: {marketConditions}
- Regulatory environment: {regulatory}
- Resource constraints: {constraints}
- Competition: {competition}

Provide a comprehensive risk assessment with mitigation strategies for each identified risk.`,
        fields: [
          {
            id: 'businessType',
            label: 'Business Type',
            type: 'text',
            placeholder: 'e.g., fintech startup',
            required: true,
          },
          {
            id: 'marketConditions',
            label: 'Market Conditions',
            type: 'textarea',
            placeholder: 'Describe current market conditions...',
            required: true,
          },
          {
            id: 'regulatory',
            label: 'Regulatory Environment',
            type: 'textarea',
            placeholder: 'Specify regulatory considerations...',
            required: true,
          },
          {
            id: 'constraints',
            label: 'Resource Constraints',
            type: 'textarea',
            placeholder: 'List resource limitations...',
            required: true,
          },
          {
            id: 'competition',
            label: 'Competition',
            type: 'textarea',
            placeholder: 'Describe competitive landscape...',
            required: true,
          },
        ],
      },
      {
        id: 'contingency-planning',
        title: 'Contingency Planning',
        description: 'Develop contingency plans for various scenarios',
        category: 'risk-analysis',
        template: `Help me develop contingency plans for my {businessType} considering these scenarios:
- Market downturn: {marketDownturn}
- Supply chain disruption: {supplyChain}
- Competitive threats: {threats}
- Resource limitations: {limitations}

Create detailed contingency plans with specific trigger points and action steps.`,
        fields: [
          {
            id: 'businessType',
            label: 'Business Type',
            type: 'text',
            placeholder: 'e.g., e-commerce business',
            required: true,
          },
          {
            id: 'marketDownturn',
            label: 'Market Downturn Concerns',
            type: 'textarea',
            placeholder: 'Specify your concerns...',
            required: true,
          },
          {
            id: 'supplyChain',
            label: 'Supply Chain Issues',
            type: 'textarea',
            placeholder: 'Describe potential disruptions...',
            required: true,
          },
          {
            id: 'threats',
            label: 'Competitive Threats',
            type: 'textarea',
            placeholder: 'List possible threats...',
            required: true,
          },
          {
            id: 'limitations',
            label: 'Resource Limitations',
            type: 'textarea',
            placeholder: 'Describe constraints...',
            required: true,
          },
        ],
      },
    ],
  },
  {
    id: 'performance-tracking',
    title: 'Performance Tracking',
    description: 'Establish KPIs and track progress',
    icon: '📈',
    prompts: [
      {
        id: 'kpi-development',
        title: 'KPI Development',
        description: 'Establish key performance indicators',
        category: 'performance-tracking',
        template: `Help me establish KPIs for my {businessType}. Consider:
- Business objectives: {objectives}
- Industry standards: {standards}
- Available measurement tools: {tools}
- Critical success factors: {successFactors}

Develop a comprehensive KPI framework with specific metrics, measurement methods, and reporting frequencies.`,
        fields: [
          {
            id: 'businessType',
            label: 'Business Type',
            type: 'text',
            placeholder: 'e.g., SaaS company',
            required: true,
          },
          {
            id: 'objectives',
            label: 'Business Objectives',
            type: 'textarea',
            placeholder: 'List your goals...',
            required: true,
          },
          {
            id: 'standards',
            label: 'Industry Standards',
            type: 'textarea',
            placeholder: 'Describe industry benchmarks...',
            required: true,
          },
          {
            id: 'tools',
            label: 'Measurement Tools',
            type: 'textarea',
            placeholder: 'List available resources...',
            required: true,
          },
          {
            id: 'successFactors',
            label: 'Critical Success Factors',
            type: 'textarea',
            placeholder: 'Describe key success factors...',
            required: true,
          },
        ],
      },
      {
        id: 'progress-review',
        title: 'Progress Review',
        description: 'Evaluate progress against your business plan',
        category: 'performance-tracking',
        template: `I need to evaluate progress against my business plan for {timePeriod}. Here's my data:
- Original targets: {targets}
- Actual performance: {performance}
- Market changes: {marketChanges}
- Resource utilization: {resourceUtilization}

Analyze performance gaps and provide specific recommendations for improvement.`,
        fields: [
          {
            id: 'timePeriod',
            label: 'Time Period',
            type: 'text',
            placeholder: 'e.g., Q1 2024',
            required: true,
          },
          {
            id: 'targets',
            label: 'Original Targets',
            type: 'textarea',
            placeholder: 'List your goals...',
            required: true,
          },
          {
            id: 'performance',
            label: 'Actual Performance',
            type: 'textarea',
            placeholder: 'Provide performance metrics...',
            required: true,
          },
          {
            id: 'marketChanges',
            label: 'Market Changes',
            type: 'textarea',
            placeholder: 'Describe market changes...',
            required: true,
          },
          {
            id: 'resourceUtilization',
            label: 'Resource Utilization',
            type: 'textarea',
            placeholder: 'Specify resource usage...',
            required: true,
          },
        ],
      },
    ],
  },
  {
    id: 'growth-strategy',
    title: 'Growth Strategy',
    description: 'Plan for scaling and market expansion',
    icon: '📱',
    prompts: [
      {
        id: 'scaling-planning',
        title: 'Scaling Planning',
        description: 'Develop a strategy for scaling your business',
        category: 'growth-strategy',
        template: `Help me develop a scaling strategy for my {businessType}. Consider:
- Current capacity: {capacity}
- Growth targets: {targets}
- Resource availability: {resources}
- Market opportunity: {opportunity}

Create a detailed scaling plan with specific steps, resource requirements, and timeline.`,
        fields: [
          {
            id: 'businessType',
            label: 'Business Type',
            type: 'text',
            placeholder: 'e.g., manufacturing company',
            required: true,
          },
          {
            id: 'capacity',
            label: 'Current Capacity',
            type: 'textarea',
            placeholder: 'Describe your current capacity...',
            required: true,
          },
          {
            id: 'targets',
            label: 'Growth Targets',
            type: 'textarea',
            placeholder: 'Specify your goals...',
            required: true,
          },
          {
            id: 'resources',
            label: 'Resource Availability',
            type: 'textarea',
            placeholder: 'List available resources...',
            required: true,
          },
          {
            id: 'opportunity',
            label: 'Market Opportunity',
            type: 'textarea',
            placeholder: 'Describe the opportunity...',
            required: true,
          },
        ],
      },
      {
        id: 'market-expansion',
        title: 'Market Expansion',
        description: 'Plan entry into new markets',
        category: 'growth-strategy',
        template: `I'm considering expanding my {businessType} into new markets. Analysis needed for:
- Target markets: {targetMarkets}
- Entry barriers: {barriers}
- Resource requirements: {requirements}
- Competition: {competition}

Provide a comprehensive market entry strategy with prioritized recommendations.`,
        fields: [
          {
            id: 'businessType',
            label: 'Business Type',
            type: 'text',
            placeholder: 'e.g., software platform',
            required: true,
          },
          {
            id: 'targetMarkets',
            label: 'Target Markets',
            type: 'textarea',
            placeholder: 'List potential markets...',
            required: true,
          },
          {
            id: 'barriers',
            label: 'Entry Barriers',
            type: 'textarea',
            placeholder: 'Describe challenges...',
            required: true,
          },
          {
            id: 'requirements',
            label: 'Resource Requirements',
            type: 'textarea',
            placeholder: 'List what you need...',
            required: true,
          },
          {
            id: 'competition',
            label: 'Competition',
            type: 'textarea',
            placeholder: 'Describe competitive landscape...',
            required: true,
          },
        ],
      },
    ],
  },
];
