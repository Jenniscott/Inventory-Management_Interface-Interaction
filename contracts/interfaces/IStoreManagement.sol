// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

interface IStoreManagement {
    struct Product {
        string name;
        uint256 quantity;
        uint256 price;
    }
    
    function addNewProduct(string memory _name, uint256 _quantity, uint256 _price) external;
    function updateStockLevel(uint256 _productId, uint256 _newQuantity) external;
    function getAllProducts() external view returns(Product[] memory);
    function retrieveStockLevel(uint256 _productId) external view returns(uint256);
    function removeProduct(uint256 _productId) external;
}