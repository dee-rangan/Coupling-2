const TruthTeller = require('../src/truth-teller.js')

describe('TruthTeller', function() {
  let truthTeller

  beforeEach(function() {
    truthTeller = new TruthTeller()
  })

  describe('guess()', function() {
    it('returns true', function() {
      expect(truthTeller.guess()).toEqual(true)
    })

    it('returns false', function() {
      expect(truthTeller.guess()).toEqual(false)
    })
  })
})
