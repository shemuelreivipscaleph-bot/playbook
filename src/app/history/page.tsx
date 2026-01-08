'use client';

import { useEffect, useState } from 'react';
import { N8NService } from '@/lib/n8n';

interface HistoryItem {
  id: string;
  promptId: string;
  promptTitle: string;
  category: string;
  inputs: Record<string, string | string[]>;
  response: string;
  timestamp: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    setIsLoading(true);
    try {
      const data = await N8NService.getHistory();
      setHistory(data);
    } catch (error) {
      console.error('Error loading history:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Your History</h1>
        <p className="content-description">
          Review and manage your previously generated business plan insights.
        </p>
      </div>

      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
          <div className="spinner" style={{ width: '40px', height: '40px' }} />
        </div>
      ) : history.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
          <h3>No History Yet</h3>
          <p className="text-muted mb-4">
            Start using prompts to build your business plan and they'll appear here.
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '2rem' }}>
          {/* History List */}
          <div>
            <div className="nav-section-title" style={{ padding: '0 0 1rem' }}>Recent Generations</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {history.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`card ${selectedItem?.id === item.id ? 'active' : ''}`}
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderColor: selectedItem?.id === item.id ? '#2563eb' : '#e5e7eb',
                    background: selectedItem?.id === item.id ? '#eff6ff' : '#ffffff',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div className="text-small text-muted mb-1">{formatDate(item.timestamp)}</div>
                  <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>{item.promptTitle}</div>
                  <div className="text-small text-muted">{item.category}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Detail View */}
          <div>
            {selectedItem ? (
              <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
                  <div>
                    <h2 style={{ marginBottom: '0.25rem' }}>{selectedItem.promptTitle}</h2>
                    <div className="text-small text-muted">
                      {selectedItem.category} • {formatDate(selectedItem.timestamp)}
                    </div>
                  </div>
                  <button
                    onClick={() => navigator.clipboard.writeText(selectedItem.response)}
                    className="btn btn-secondary"
                  >
                    Copy Response
                  </button>
                </div>

                <div className="mb-6">
                  <div className="preview-title">Inputs Provided</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {Object.entries(selectedItem.inputs).map(([key, value]) => (
                      <div key={key} style={{ padding: '0.75rem', background: '#f9fafb', borderRadius: '6px' }}>
                        <div className="text-small" style={{ fontWeight: '600', color: '#6b7280', marginBottom: '0.25rem' }}>{key}</div>
                        <div className="text-small">{Array.isArray(value) ? value.join(', ') : value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="preview-title">Generated Guidance</div>
                  <div className="response-content" style={{ padding: '1.25rem', background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    {selectedItem.response}
                  </div>
                </div>
              </div>
            ) : (
              <div className="card" style={{ textAlign: 'center', padding: '5rem 2rem', color: '#9ca3af' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👈</div>
                <p>Select an entry from the list to view the full details.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
