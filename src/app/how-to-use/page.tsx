export default function HowToUse() {
  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">How to Use This Guide</h1>
        <p className="content-description">
          A step-by-step guide to leveraging AI for your business planning needs.
        </p>
      </div>

      <div className="card">
        <h3>1. Select a Phase</h3>
        <p className="text-muted mb-4">
          The playbook is organized by business phases. Start with **Strategy Development** if you're just 
          beginning, or jump to **Financial Planning** or **Implementation** if you're further along.
        </p>
      </div>

      <div className="card">
        <h3>2. Provide Your Context</h3>
        <p className="text-muted mb-4">
          Each tool requires specific information about your business. Be as detailed as possible in 
          your inputs. The better the information you provide, the more accurate and helpful the AI 
          guidance will be.
        </p>
      </div>

      <div className="card">
        <h3>3. Generate Insights</h3>
        <p className="text-muted mb-4">
          Click the "Generate Response" button to send your details to our AI engine (powered by n8n). 
          The AI will process your inputs and provide tailored strategic advice, templates, or analyses.
        </p>
      </div>

      <div className="card">
        <h3>4. Review and Implement</h3>
        <p className="text-muted mb-4">
          Read through the generated response. You can copy it to your clipboard for use in your 
          official business plan document. Remember that AI is a tool for brainstorming and structure—always 
          verify the data and tailor the results to your unique situation.
        </p>
      </div>

      <div className="card">
        <h3>5. Track Your Progress</h3>
        <p className="text-muted mb-4">
          All your generated insights are saved in the **History** section. You can return to them 
          at any time to review your strategy or update your plans as your business grows.
        </p>
      </div>
    </div>
  );
}
