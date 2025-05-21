import { Component } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
import {BlockViewComponent} from '../../components/block-view/block-view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blockchain-viewer',
  standalone: true,
  imports: [
    BlockViewComponent, CommonModule
  ],
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent {
  public blocks: any[] = [];

  constructor(private blockchainService: BlockchainService) {
    this.blocks = blockchainService.getBlocks();
  }

}
