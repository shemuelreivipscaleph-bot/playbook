export default function Home() {
  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Business Plan Playbook</h1>
        <p className="content-description">
          Transform your business ideas into actionable plans with AI-powered modules.
          Select a category from the sidebar to get started.
        </p>
      </div>

      <div className="card">
        <h2>Introduction</h2>
        <p className="text-muted mb-4">
          This detailed playbook translates key business concepts into actionable AI modules designed to help 
          entrepreneurs develop and execute effective business plans. Whether you're creating a traditional 
          business plan or using a lean startup approach, these tools will help you harness AI to achieve 
          your business planning and execution goals.
        </p>
      </div>

      <div className="card">
        <h3 className="card-title">How to Use This Guide</h3>
        <ul style={{ paddingLeft: '1.5rem', color: '#6b7280' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Choose modules that align with your current business planning phase
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Provide your specific business context and requirements in the provided fields
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Generate detailed, personalized responses processed by our strategic AI engine
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Implement the insights and recommendations directly into your business strategy
          </li>
          <li>
            Return to relevant modules as your business evolves and grows
          </li>
        </ul>
      </div>

      <div className="card">
        <h3 className="card-title">Business Planning Categories</h3>
        <p className="text-muted mb-4">
          Navigate through the sidebar to explore different strategic areas:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: '#f9fafb', borderRadius: '6px' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>📋 Strategy Development</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Define your business model and vision</div>
          </div>
          <div style={{ padding: '1rem', background: '#f9fafb', borderRadius: '6px' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>📊 Market Research</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Understand your market and customers</div>
          </div>
          <div style={{ padding: '1rem', background: '#f9fafb', borderRadius: '6px' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>💰 Financial Planning</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Project revenue and calculate costs</div>
          </div>
          <div style={{ padding: '1rem', background: '#f9fafb', borderRadius: '6px' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>🚀 Implementation</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Plan milestones and marketing</div>
          </div>
          <div style={{ padding: '1rem', background: '#f9fafb', borderRadius: '6px' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>⚠️ Risk Analysis</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Identify and mitigate risks</div>
          </div>
          <div style={{ padding: '1rem', background: '#f9fafb', borderRadius: '6px' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>📈 Performance Tracking</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Establish KPIs and track progress</div>
          </div>
        </div>
      </div>
    </div>
  );
}
