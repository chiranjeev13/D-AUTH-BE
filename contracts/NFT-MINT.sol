// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT_MINT is ERC721, Ownable {
    using Strings for uint256;

    uint public constant MAX_TOKENS = 10000;
    uint256 _numTokens = 0;
    mapping(address => bool) verified;
    bool public isSaleActive = true;
    uint256 public totalSupply;
    mapping(address => uint256) private mintedPerWallet;

    string public baseUri;
    uint256 chk;
    uint200 h;
    uint cp = 0;
    uint256 public tokenId;

    constructor() ERC721("D-AUTH", "DAU") {
        baseUri = "https://gateway.pinata.cloud/ipfs/QmPWzKZKYsxnXvYQX2PfN6ab7Y4qAcdNYJZUA4aCo19L3S/";
        tokenId = 0;
        totalSupply = 0;
        chk = 1;
    }

    function updateBaseURI(string memory newbaseUri) private onlyOwner {
        baseUri = newbaseUri;
    }

    // Public Functions

    function mint() external payable returns (uint256) {
        require(!verified[msg.sender], "Already verified");
        require(isSaleActive, "The sale is paused.");
        require(
            mintedPerWallet[msg.sender] == 0,
            "You cannot mint that many total."
        );
        uint256 curTotalSupply = totalSupply;
        require(
            curTotalSupply + _numTokens <= MAX_TOKENS,
            "Exceeds total supply."
        );
        tokenId++;
        _safeMint(msg.sender, tokenId);
        verified[msg.sender] = true;
        _numTokens++;
        mintedPerWallet[msg.sender] += _numTokens;

        totalSupply++;
        cp = 1;
        return tokenId;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUri;
    }

    //tests
    function getchk() public view returns (uint256) {
        return chk;
    }

    function getTotalSupply() public view returns (uint256) {
        return totalSupply;
    }

    function getVerifiedstatus() public view returns (bool) {
        return verified[msg.sender];
    }

    function Verifier(address nft_owner) public view returns (uint256, bool) {
        address temp;
        uint256 tknId=0;
        uint p = 0;
        while (p <= totalSupply && tknId <= totalSupply) {
            tknId++;
            temp = ownerOf(tknId);
            if (nft_owner == temp) {
                return (tknId, true);
            }
            p++;
        }
        return (0, false);
    }

    function getTokenId() public view returns (uint256) {
        return tokenId;
    }

    function tokenURI(
        uint256 tkenId
    ) public view virtual override returns (string memory) {
        _requireMinted(tkenId);

        string memory baseURI = _baseURI();
        return
            bytes(baseURI).length > 0
                ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json"))
                : "";
    }
}
