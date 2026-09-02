const test = require('node:test');
const assert = require('node:assert');
const { getWelcomeHtml } = require('../server.js');

test('getWelcomeHtml returns HTML containing the greeting title', () => {
  const html = getWelcomeHtml('Siddhartha');
  assert.ok(html.includes('Welcome to Harness Lab'));
  assert.ok(html.includes('Candidate: Siddhartha'));
});
