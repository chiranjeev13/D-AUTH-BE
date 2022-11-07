// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT_MINT is ERC721, Ownable {
    using Strings for uint256;

    uint public constant MAX_TOKENS = 10000;
    uint private constant TOKENS_RESERVED = 1;
    uint public price = 100000000000000000;
    uint256 public constant MAX_MINT_PER_TX = 1;
    mapping (address => bool) verified;

    bool public isSaleActive = true;
    uint256 public totalSupply;
    mapping(address => uint256) private mintedPerWallet;

    string public baseUri;
    string public baseExtension = ".json";
    uint256 chk;
    constructor() ERC721("D-AUTH", "DAU") {
        baseUri = "https://app.zeeve.io/zdfs-gateway/ipfs/";
        {
            _safeMint(msg.sender, TOKENS_RESERVED);
        }
        totalSupply = TOKENS_RESERVED;
        chk=1;
    }


    

    // Public Functions
    

    function mint(uint256 _numTokens) external payable {
        require(!verified[msg.sender],"Already verified");
        require(isSaleActive, "The sale is paused.");
        require(_numTokens <= MAX_MINT_PER_TX, "You cannot mint that many in one transaction.");
        require(mintedPerWallet[msg.sender] + _numTokens <= MAX_MINT_PER_TX, "You cannot mint that many total.");
        uint256 curTotalSupply = totalSupply;
        require(curTotalSupply + _numTokens <= MAX_TOKENS, "Exceeds total supply.");
        //require(_numTokens * price <= msg.value, "Insufficient funds.");

        
            _safeMint(msg.sender, curTotalSupply);
        
        mintedPerWallet[msg.sender] += _numTokens;
        totalSupply += _numTokens;
        verified[msg.sender]=true;
    }

    // Owner-only functions
    function flipSaleState() external onlyOwner {
        isSaleActive = !isSaleActive;
    }

    function setBaseUri(string memory _baseUri) external onlyOwner {
        baseUri = _baseUri;
    }

    function setPrice(uint256 _price) external onlyOwner {
        price = _price;
    }

    //tests
    function getchk() public view returns(uint256)
    {
        return chk;
    }

    function getTotalSupply() public view returns(uint256)
    {
        return totalSupply;
    }

    function getVerifiedstatus() public view returns(bool)
    {
        return verified[msg.sender];
    }
}