const express= require('express');
const router = express.Router();
const genericApi = require('../controller/genericApi');
const contractApi = require('../controller/contractApi');

//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------ROUTES FOR GENERIC FUNCTIONS---------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//

/**
* @typedef createAccount
*/
/**
* @route GET /api/eth/nexon/createAccount
* @group Generic_API
* @security Basic Auth
*/
router.get('/createAccount', genericApi.createAccount);

// /**
// * @typedef getAccount
// * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
// */
// /**
// * @route GET /api/eth/nexon/getAccount
// * @param {getAccount.model} address.query
// * @group Generic_API
// * @security Basic Auth
// */
// router.get('/getAccount', genericApi.getAccount);

/**
* @typedef getETHBalance
* @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
*/
/**
* @route GET /api/eth/nexon/getETHBalance
* @param {getETHBalance.model} address.query
* @group Generic_API
* @security Basic Auth
*/
router.get('/getETHBalance', genericApi.getETHBalance);

/**
* @typedef getTransactionByHash
* @property {String} hash.required - Add hash - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
*/
/**
* @route GET /api/eth/nexon/getTransactionByHash
* @param {getTransactionByHash.model} hash.query
* @group Generic_API
* @security Basic Auth
*/
router.get('/getTransactionByHash', genericApi.getTransactionByHash);


// /**
// * @typedef getTransactionsByAddress
// * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
// */
// /**
// * @route GET /api/eth/nexon/getTransactionsByAddress
// * @param {getTransactionsByAddress.model} address.query
// * @group Generic_API
// * @security Basic Auth
// */
// router.get('/getTransactionsByAddress', genericApi.getTransactionsByAddress);                                   

/**
* @typedef getTransactionByBlock
* @property {String} block.required - Add block - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
*/
/**
* @route GET /api/eth/nexon/getTransactionByBlock
* @param {getTransactionByBlock.model} block.query
* @group Generic_API
* @security Basic Auth
*/
router.get('/getTransactionByBlock', genericApi.getTransactionByBlock);                                              

/**
* @typedef ETH_Status
*/
/**
* @route GET /api/eth/nexon/getStatus
* @group Generic_API
* @security Basic Auth
*/
router.get('/getStatus', genericApi.getStatus);


//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------ROUTES FOR ERC20 FUNCTIONALITY---------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//

    /**
    * @typedef getTokenOwner
    */
    /**
    * @route GET /api/eth/nexon/getTokenOwner
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getTokenOwner', contractApi.getTokenOwner);

    /**
    * @typedef getTokenOwnerBalance
    * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/eth/nexon/getTokenOwnerBalance
    * @param {getTokenOwnerBalance.model} address.query
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getTokenOwnerBalance', contractApi.getTokenOwnerBalance);

    /**
    * @typedef getTokenName
    */
    /**
    * @route GET /api/eth/nexon/getTokenName
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getTokenName', contractApi.getTokenName);

   /**
   * @typedef getTokenSymbol
   */
   /**
   * @route GET /api/eth/nexon/getTokenSymbol
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.get('/getTokenSymbol', contractApi.getTokenSymbol);

   /**
   * @typedef getTokenTotalSupply
   */
   /**
   * @route GET /api/eth/nexon/getTokenTotalSupply
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.get('/getTokenTotalSupply', contractApi.getTokenTotalSupply);

    /**
    * @typedef approveToken
    * @property {String} privateKey.required - Add privateKey - eg: 0x3e2b296f55b5768b0b6e28fa318e613a4c4bfa3a26142e89453eb6a89f7f5978
    * @property {String} fromAddress.required - Add fromAddress - eg: 0x98A000309527D55031238457A95b80B6AdD3CcaB
	* @property {String} toAddress.required - Add toAddress - eg: 0xf49ddDB0019ED8b03C03e75a9329a98746847dE5
	* @property {String} amount.required - Add amount - eg: 5
    */
    /**
    * @route POST /api/eth/nexon/approveToken
    * @param {approveToken.model} req.body
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.post('/approveToken', contractApi.approveToken);

   /**
   * @typedef transferToken
   * @property {String} privateKey.required - Add privateKey - eg: 90d6bfe121ca841b624028284687917843a03f88b84943d1d4d20336ab67fbb6
   * @property {String} fromAddress.required - Add fromAddress - eg: 0x98A000309527D55031238457A95b80B6AdD3CcaB
   * @property {String} toAddress.required - Add toAddress - eg: 0xf49ddDB0019ED8b03C03e75a9329a98746847dE5
   * @property {String} amount.required - Add amount - eg: 5
   */
   /**
   * @route POST /api/eth/nexon/transferToken
   * @param {transferToken.model} req.body
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.post('/transferToken', contractApi.transferToken);

   /**
   * @typedef transferFrom
   * @property {String} privateKey.required - Add privateKey - eg: 0x3e2b296f55b5768b0b6e28fa318e613a4c4bfa3a26142e89453eb6a89f7f5978
   * @property {String} fromAddress.required - Add fromAddress - eg: 0x98A000309527D55031238457A95b80B6AdD3CcaB
   * @property {String} toAddress.required - Add toAddress - eg: 0xf49ddDB0019ED8b03C03e75a9329a98746847dE5
   * @property {String} amount.required - Add amount - eg: 5
   */
   /**
   * @route POST /api/eth/nexon/transferFrom
   * @param {transferFrom.model} req.body
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.post('/transferFrom', contractApi.transferFrom);

   /**
   * @typedef burnToken
   * @property {String} privateKey.required - Add privateKey - eg: 0x3e2b296f55b5768b0b6e28fa318e613a4c4bfa3a26142e89453eb6a89f7f5978
   * @property {String} fromAddress.required - Add fromAddress - eg: 0x98A000309527D55031238457A95b80B6AdD3CcaB
   * @property {String} amount.required - Add amount - eg: 5
   */
   /**
   * @route POST /api/eth/nexon/burnToken
   * @param {burnToken.model} req.body
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.post('/burnToken', contractApi.burnToken);

   /**
   * @typedef mintToken
   * @property {String} privateKey.required - Add privateKey - eg: 0x3e2b296f55b5768b0b6e28fa318e613a4c4bfa3a26142e89453eb6a89f7f5978
   * @property {String} fromAddress.required - Add fromAddress - eg: 0x98A000309527D55031238457A95b80B6AdD3CcaB
   * @property {String} amount.required - Add amount - eg: 5
   */
   /**
   * @route POST /api/eth/nexon/mintToken
   * @param {mintToken.model} req.body
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.post('/mintToken', contractApi.mintToken);

   /**
   * @typedef transferOwnership
   * @property {String} privateKey.required - Add privateKey - eg: 0x3e2b296f55b5768b0b6e28fa318e613a4c4bfa3a26142e89453eb6a89f7f5978
   * @property {String} fromAddress.required - Add fromAddress - eg: 0x98A000309527D55031238457A95b80B6AdD3CcaB
   * @property {String} newAddress.required - Add newAddress - eg: asdfghjkkkjhgfd
   */
   /**
   * @route POST /api/eth/nexon/transferOwnership
   * @param {transferOwnership.model} req.body
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.post('/transferOwnership', contractApi.transferOwnership);


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------ROUTES FOR NEXON FUNCTIONALITY------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//

   /**
   * @typedef getSaleIdNow
   */
   /**
   * @route GET /api/eth/getSaleIdNow
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.get('/getSaleIdNow', contractApi.getSaleIdNow);

    /**
    * @typedef getStartTime
    * @property {String} saleId.required - Add saleId - eg: 1
    */
    /**
    * @route GET /api/eth/getStartTime
    * @param {getStartTime.model} saleId.query
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getStartTime', contractApi.getStartTime);

    /**
    * @typedef getEndTime
    * @property {String} saleId.required - Add saleId - eg: 1
    */
    /**
    * @route GET /api/eth/getEndTime
    * @param {getEndTime.model} saleId.query
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getEndTime', contractApi.getEndTime);

    /**
    * @typedef getWinningNumber
    * @property {String} saleId.required - Add saleId - eg: 1
    */
    /**
    * @route GET /api/eth/getWinningNumber
    * @param {getWinningNumber.model} saleId.query
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getWinningNumber', contractApi.getWinningNumber);

    /**
    * @typedef getWinningAmount
    * @property {String} saleId.required - Add saleId - eg: 1
    */
    /**
    * @route GET /api/eth/getWinningAmount
    * @param {getWinningAmount.model} saleId.query
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getWinningAmount', contractApi.getWinningAmount);

    /**
    * @typedef getWinningAddress
    * @property {String} saleId.required - Add saleId - eg: 1
    */
    /**
    * @route GET /api/eth/getWinningAddress
    * @param {getWinningAddress.model} saleId.query
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getWinningAddress', contractApi.getWinningAddress);

    /**
    * @typedef getAllSaleAddresses
    * @property {String} saleId.required - Add saleId - eg: 1
    */
    /**
    * @route GET /api/eth/getAllSaleAddresses
    * @param {getAllSaleAddresses.model} saleId.query
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getAllSaleAddresses', contractApi.getAllSaleAddresses);

   /**
   * @typedef getAllParticipantAddresses
   */
   /**
   * @route GET /api/eth/getAllParticipantAddresses
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.get('/getAllParticipantAddresses', contractApi.getAllParticipantAddresses);

    /**
    * @typedef getTotalSaleAmountBySaleID
    * @property {String} saleId.required - Add saleId - eg: 1
    */
    /**
    * @route GET /api/eth/getTotalSaleAmountBySaleID
    * @param {getTotalSaleAmountBySaleID.model} saleId.query
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getTotalSaleAmountBySaleID', contractApi.getTotalSaleAmountBySaleID);

   /**
   * @typedef getTotalSaleAmountForAllSale
   */
   /**
   * @route GET /api/eth/getTotalSaleAmountForAllSale
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.get('/getTotalSaleAmountForAllSale', contractApi.getTotalSaleAmountForAllSale);

    /**
    * @typedef getParticipantCountBySaleId
    * @property {String} saleId.required - Add saleId - eg: 1
    */
    /**
    * @route GET /api/eth/getParticipantCountBySaleId
    * @param {getParticipantCountBySaleId.model} saleId.query
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getParticipantCountBySaleId', contractApi.getParticipantCountBySaleId);

   /**
   * @typedef getPriceOfOneTicket
   */
   /**
   * @route GET /api/eth/getPriceOfOneTicket
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.get('/getPriceOfOneTicket', contractApi.getPriceOfOneTicket);

    /**
    * @typedef getticketNumberByAddress
    * @property {String} saleId.required - Add saleId - eg: 1
    * @property {string} address.required - Add address - eg: qwertyuiolkjhgfd
    */
    /**
    * @route GET /api/eth/getticketNumberByAddress
    * @param {getticketNumberByAddress.model} saleId.query
    * @param {getticketNumberByAddress.model} address.query
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getticketNumberByAddress', contractApi.getticketNumberByAddress);

    /**
    * @typedef getAddressesByTicketNumber
    * @property {String} saleId.required - Add saleId - eg: 1
    * @property {string} ticketNumber.required - Add ticketNumber - eg: 2
    */
    /**
    * @route GET /api/eth/getAddressesByTicketNumber
    * @param {getAddressesByTicketNumber.model} saleId.query
    * @param {getAddressesByTicketNumber.model} ticketNumber.query
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getAddressesByTicketNumber', contractApi.getAddressesByTicketNumber);

   /**
   * @typedef getpurchaseTokenAmount
   */
   /**
   * @route GET /api/eth/getpurchaseTokenAmount
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.get('/getpurchaseTokenAmount', contractApi.getpurchaseTokenAmount);

   /**
   * @typedef getbuyerPoolAddress
   */
   /**
   * @route GET /api/eth/getbuyerPoolAddress
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.get('/getbuyerPoolAddress', contractApi.getbuyerPoolAddress);

   /**
   * @typedef getMaximumTicketPerEvent
   */
   /**
   * @route GET /api/eth/getMaximumTicketPerEvent
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.get('/getMaximumTicketPerEvent', contractApi.getMaximumTicketPerEvent);

   /**
   * @typedef purchaseTicket
   * @property {String} privateKey.required - Add privateKey - eg: 0x3e2b296f55b5768b0b6e28fa318e613a4c4bfa3a26142e89453eb6a89f7f5978
   * @property {String} fromAddress.required - Add fromAddress - eg: 0x98A000309527D55031238457A95b80B6AdD3CcaB
   * @property {String} value.required - Add value - eg: 1
   * @property {String} ticketNumber.required - Add ticketNumber - eg: 5
   */
   /**
   * @route POST /api/eth/purchaseTicket
   * @param {purchaseTicket.model} req.body
   * @group Smart_Contract_API
   * @security Basic Auth
   */
router.post('/purchaseTicket', contractApi.purchaseTicket);

    

module.exports= router
