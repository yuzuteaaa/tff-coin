import { Injectable } from '@angular/core';
const { Blockchain } = require('../../blockchain');
import EC from 'elliptic';
import type { ec as ECType } from 'elliptic';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockchainInstance = new Blockchain();

  public walletKeys: {
    keyObj: ECType.KeyPair;
    publicKey: string;
    privateKey: string
  }[] = [];

  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('my-wallet-address');

    this.generateWalletKeys();
  }

  getBlocks() {
    return this.blockchainInstance.chain;
  }

  private generateWalletKeys() {
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    });
  }
}
