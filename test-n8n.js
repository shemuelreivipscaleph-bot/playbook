// using global fetch

// If node-fetch isn't available, we use the global fetch (Node 18+)

const N8N_URL = 'http://localhost:5678/webhook/business-plan';

async function testN8n() {
    console.log('Testing n8n webhook at:', N8N_URL);

    const payload = {
        promptTemplate: "Generate a business plan for {businessType}",
        inputs: {
            businessType: "Coffee Shop"
        }
    };

    try {
        const response = await fetch(N8N_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        console.log('Status Code:', response.status);
        const text = await response.text();
        console.log('Raw Response Body:', text);

        try {
            const json = JSON.parse(text);
            console.log('Parsed JSON:', JSON.stringify(json, null, 2));
        } catch (e) {
            console.log('Response is NOT valid JSON.');
        }

    } catch (error) {
        console.error('Fetch Failed:', error.message);
        if (error.code === 'ECONNREFUSED') {
            console.error('Connection Refused. Is n8n running on port 5678?');
        }
    }
}

// Run the test
if (typeof fetch === 'undefined') {
    // If running on older node without global fetch
    console.log('Global fetch not found, this script requires Node 18+ or node-fetch package.');
} else {
    testN8n();
}
