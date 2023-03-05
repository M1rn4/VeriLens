// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract RandomNFT is ERC721 {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    mapping(uint256 => uint256) private _randomNumbers;
    uint256 private _maxRandomValue = 10;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        
    }

    function mint( ) public {
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, _tokenIds.current())));
        _randomNumbers[_tokenIds.current()] = randomNumber;

        if (randomNumber >= 8) {
            _mint(msg.sender, _tokenIds.current());
        }

        _tokenIds.increment();
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory baseURI = "https://example.com/token/";
        string memory tokenURI = string(abi.encodePacked(baseURI, Strings.toString(tokenId)));

      //  string memory tokenURI = string(abi.encodePacked(baseURI, tokenId.toString()));

        return tokenURI;
    }

    function getRandomNumber(uint256 tokenId) public view returns (uint256) {
        require(_exists(tokenId), "ERC721Metadata: nonexistent token");

        return _randomNumbers[tokenId];
    }
}
