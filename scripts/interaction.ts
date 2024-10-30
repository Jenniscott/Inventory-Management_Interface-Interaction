import { ethers } from "hardhat";

async function interaction() {
    const [signer] = await ethers.getSigners();

    const storeManagementContractAddress = "0x123C88c112b410C827c6Da7477Ab4CE73F66585D";

    const storeManagementContract = await ethers.getContractAt("IStoreManagement", storeManagementContractAddress);

    const name = "Jesdi cup";
    const qty = 5;
    const price = 500000;

    const tx = await storeManagementContract.addNewProduct(name, qty, price);
    tx.wait();

     //console.log(tx);

    const products = await storeManagementContract.getAllProducts();

    //console.log(products);

    const Update = await storeManagementContract.updateStockLevel(5, 75);
    await Update.wait();
    //console.log(Update);

    const retrieve = await storeManagementContract.retrieveStockLevel(5);
    //console.log(retrieve);

    const Remove = await storeManagementContract.removeProduct(6);
    await Remove.wait();
    console.log(Remove);

}

interaction();