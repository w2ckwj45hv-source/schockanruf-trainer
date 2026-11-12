const assert = require('node:assert/strict');
const { test } = require('node:test');
const SZENARIEN = require('../szenarien.js');

test('jeder Schritt hat genau eine gute Antwort und zu jeder Antwort eine Erklärung', () => {
  assert.ok(SZENARIEN.length >= 3);
  assert.equal(new Set(SZENARIEN.map(s => s.id)).size, SZENARIEN.length, 'ids müssen eindeutig sein');
  for (const s of SZENARIEN) {
    assert.ok(s.titel && s.masche && s.merksatz, s.id);
    assert.ok(s.schritte.length >= 1, s.id);
    for (const [i, schritt] of s.schritte.entries()) {
      const ort = `${s.id}, Schritt ${i + 1}`;
      assert.ok(schritt.anrufer.length > 20, ort);
      assert.ok(schritt.antworten.length >= 2, ort);
      assert.equal(schritt.antworten.filter(a => a.gut === true).length, 1, `${ort}: genau eine gute Antwort`);
      for (const a of schritt.antworten) assert.ok(a.text && a.erklaerung.length > 20 && typeof a.gut === 'boolean', ort);
    }
  }
});

test('die gute Antwort steht nicht immer an derselben Stelle', () => {
  const stellen = new Set(SZENARIEN.flatMap(s => s.schritte.map(x => x.antworten.findIndex(a => a.gut))));
  assert.ok(stellen.size >= 2);
});
