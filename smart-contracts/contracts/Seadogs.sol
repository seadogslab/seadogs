// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Seadogs is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _nextTokenId;

    mapping (uint256 => string) public tokenIdToUri;

    string _baseTokenURI;

     event Mint(address indexed by,  uint256 tokenId);

    constructor() ERC721("SeaDogs", "SEADOGS") {
        _setBaseURI("ipfs://");
    }

    function totalSupply() public view returns (uint256) {
        return _nextTokenId.current() - 1;
    }

    /*
    * Mint allowed only for the owner
    */
    function mintToken(string memory tokenUri) public onlyOwner() returns (uint256) {
        uint256 tokenId =  _nextTokenId.current();

        _safeMint(msg.sender, tokenId);

        tokenIdToUri[tokenId] = tokenUri;
        _nextTokenId.increment();

        emit Mint(msg.sender, tokenId);

        return tokenId;
    }

    function _setBaseURI(string  memory baseURI) public onlyOwner() {
        _baseTokenURI = baseURI;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return bytes(_baseTokenURI).length > 0 ? string(abi.encodePacked(_baseTokenURI, tokenIdToUri[tokenId])) : "";
    }
}
