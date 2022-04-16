//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MintrestNFT is ERC721URIStorage {
    uint256 MINTREST_TOKEN_ID;

    constructor() ERC721("MintrestNFT", "MINT") {}

    function mintNFT(address _userOne, address _userTwo, string memory tokenURI) public {
        _mint(_userOne, MINTREST_TOKEN_ID);
        _setTokenURI(MINTREST_TOKEN_ID, tokenURI);
         MINTREST_TOKEN_ID++;

        _mint(_userTwo,MINTREST_TOKEN_ID);
        _setTokenURI(MINTREST_TOKEN_ID, tokenURI);
        MINTREST_TOKEN_ID++;
    }
}