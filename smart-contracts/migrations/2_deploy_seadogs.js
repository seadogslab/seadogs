var MyContract = artifacts.require("Seadogs");

module.exports = async function(deployer) {
    // deployment steps
    await deployer.deploy(MyContract);

    const instance = await MyContract.deployed();
    const owner = await instance.owner();
    console.log("Owner: " + owner);
    console.log("Contract address: " + instance.address);
};