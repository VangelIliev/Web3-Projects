task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  console.log("Accounts:");
  for (const account of accounts) {
    console.log(account.address);
  }
}); 