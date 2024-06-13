import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Chicken Blaze";
  export const SYMBOL: string = "CBZ";
  export const MINT_PRICE: u64 = 7700000000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 333;
  export const URI: string = "https://nftstorage.link/ipfs/bafybeieduspmbrxf6qsttkulohsknfylfa6itr2hqjurfhxj5vwnuy2c7i/";
  export const OWNER: Uint8Array = Base58.decode("1GC1HUfZBpddoE4dw1qqywCebkjf82Bt9z");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1GC1HUfZBpddoE4dw1qqywCebkjf82Bt9z");
}