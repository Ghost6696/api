
// Original main.js file content

(function() {
    // Original code and functions go here
    
    // Placeholder for original code segment
    // Example: a0_0x262bb0[0x263] function

    [a0_0x262bb0(0x263)] = function() {
        const _0x5f058a = a0_0x262bb0,
            _0x52be56 = JSON[_0x5f058a(0x250)]({
                'sections': this[_0x5f058a(0x374)]()[_0x5f058a(0x3b1)](_0x5f3aa4 => _0x5f3aa4[_0x5f058a(0x426)]),
                'sections_url': window[_0x5f058a(0x2df)][_0x5f058a(0x3aa)]
            });

        fetch(_0x5f058a(0x507), {
            'method': 'POST',
            'headers': {
                'Content-Type': _0x5f058a(0x22d)
            },
            'body': _0x52be56
        })[_0x5f058a(0x3e2)](_0x25fe5c => _0x25fe5c[_0x5f058a(0x33a)]())['then'](_0x63825d => {
            const _0x439a34 = _0x5f058a;
            this['classList'][_0x439a34(0x408)](_0x439a34(0x313), _0x63825d['item_count'] === 0x0),
                this[_0x439a34(0x374)]()[_0x439a34(0x2b1)](_0x53c82d => {
                    const _0xbb275b = _0x439a34,
                        _0xe89b8f = document[_0xbb275b(0x513)](_0x53c82d['id'])[_0xbb275b(0x3d2)](_0x53c82d['selector']) || document[_0xbb275b(0x513)](_0x53c82d['id']);
                    _0xe89b8f['innerHTML'] = this[_0xbb275b(0x2d4)](_0x63825d[_0xbb275b(0x36e)][_0x53c82d[_0xbb275b(0x426)]], _0x53c82d[_0xbb275b(0x33b)]);
                });
        }).catch(_0x5a277 => {
            console.error(_0x5a277);
        });
    };
})();

// New code to handle quantity updates
document.addEventListener("DOMContentLoaded", () => {
    // Capture the quantity input field and set a default quantity if not set
    const quantityInput = document.querySelector('input[name="quantity"]');
    let selectedQuantity = 1;

    if (quantityInput) {
        // Listen for changes to the quantity input
        quantityInput.addEventListener("input", (event) => {
            selectedQuantity = parseInt(event.target.value) || 1;
            console.log("Updated Quantity:", selectedQuantity);
        });
    } else {
        console.error("Quantity input not found.");
    }

    const originalFunction = a0_0x262bb0[0x263]; // Replace with the actual obfuscated function if known

    // Override the function to include quantity in payload
    a0_0x262bb0[0x263] = function () {
        const payload = JSON.parse(JSON.stringify(originalFunction.apply(this, arguments))); // Clone the payload created by the original function

        // Ensure quantity is added to each item in the items array
        if (payload && payload.items) {
            payload.items = payload.items.map(item => ({ ...item, quantity: selectedQuantity }));
        } else {
            console.error("Failed to add quantity: Payload structure unexpected.");
        }

        // Send the modified request
        fetch(payload.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => console.log("Response:", data))
        .catch(error => console.error("Error:", error));
    };
});
