const Seagods = artifacts.require('Seadogs')

contract('Seadogs tests', (accounts) => {
  let contract

  it('test deployed', () =>
    Seagods.deployed()
      .then((instance) => {
        contract = instance
        return instance.balanceOf.call(accounts[0])
      })
      .then((balance) => {
        assert.equal(balance.valueOf(), 0, '0 is ok')
      }))

  it('try mint', async () => {
    return contract.methods.mintToken('test1')
      .call({from: accounts[0]})
      .then((token1) => {
        console.log('toek', token1)
      })
      .catch((err) => console.warn(err))
  })

  it('try mint2', async () => {
    return contract.mintToken('test1')
      .send({from: accounts[0]})
      .then((token1) => {
        console.log('toek', token1)
      })
      .catch((err) => console.warn(err))
  })

  /*it('tokenURI test', () => {
    let contract

    return Seagods.deployed()
      .then((instance) => {
        contract = instance
        return contract.tokenURI.call(3)
      })
      .then((uri) => {
        console.log('uri', uri)
        assert.equal(uri, 'testwdwdw1', '')
      })
  })*/
})
