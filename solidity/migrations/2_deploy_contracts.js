/* global artifacts */
/* eslint-disable prefer-reflect */

const Utils = artifacts.require('Utils.sol');
const Owned = artifacts.require('Owned.sol');
const Managed = artifacts.require('Managed.sol');
const TokenHolder = artifacts.require('TokenHolder.sol');
const ERC20Token = artifacts.require('ERC20Token.sol');
const EtherToken = artifacts.require('EtherToken.sol');
const ContractRegistry = artifacts.require('ContractRegistry.sol');
const ContractFeatures = artifacts.require('ContractFeatures.sol');
const Whitelist = artifacts.require('Whitelist.sol');
const SmartToken = artifacts.require('SmartToken.sol');
const SmartTokenController = artifacts.require('SmartTokenController.sol');
const BancorNetwork = artifacts.require('BancorNetwork.sol');
const BancorX = artifacts.require('BancorX.sol');
const XTransferRerouter = artifacts.require('XTransferRerouter.sol');
const BancorFormula = artifacts.require('BancorFormula.sol');
const BancorGasPriceLimit = artifacts.require('BancorGasPriceLimit.sol');
const BancorConverter = artifacts.require('BancorConverter.sol');
const BancorConverterFactory = artifacts.require('BancorConverterFactory.sol');
const BancorConverterUpgrader = artifacts.require('BancorConverterUpgrader.sol');
const BancorConverterRegistry = artifacts.require('BancorConverterRegistry.sol');
const CrowdsaleController = artifacts.require('CrowdsaleController.sol');

module.exports = function(deployer, network, accounts) {
    if (network == "production") {
        deployer.deploy(Utils);
        deployer.deploy(Owned);
        deployer.deploy(Managed);
        deployer.deploy(TokenHolder);
        deployer.deploy(ERC20Token, 'DummyToken', 'DUM', 0);
        deployer.deploy(EtherToken);
        deployer.deploy(ContractRegistry);
        deployer.deploy(ContractFeatures);
        deployer.deploy(Whitelist);
        deployer.deploy(SmartToken, 'Token1', 'TKN1', 2);
        deployer.deploy(SmartTokenController, SmartToken.address);
        deployer.deploy(BancorFormula);
        deployer.deploy(BancorGasPriceLimit, '22000000000');
        deployer.deploy(BancorNetwork, ContractRegistry.address);
        deployer.deploy(BancorConverter, SmartToken.address, ContractRegistry.address, 0, '0x0', 0);

        deployer.deploy(BancorConverterFactory);
        deployer.deploy(BancorConverterUpgrader, ContractRegistry.address);

        deployer.deploy(BancorConverterRegistry);

        deployer.deploy(CrowdsaleController, SmartToken.address, 4102444800, '0x125', '0x126', 1);
        deployer.deploy(XTransferRerouter, true);
    }
};
