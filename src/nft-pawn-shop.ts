import {
  NftDelisted as NftDelistedEvent,
  NftListed as NftListedEvent,
  NftSold as NftSoldEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PawnAgreementRemoved as PawnAgreementRemovedEvent,
  PawnRequestApproved as PawnRequestApprovedEvent,
  PawnRequestRemoved as PawnRequestRemovedEvent,
  PawnRequested as PawnRequestedEvent
} from "../generated/NftPawnShop/NftPawnShop"
import {
  NftDelisted,
  NftListed,
  NftSold,
  OwnershipTransferred,
  PawnAgreementRemoved,
  PawnRequestApproved,
  PawnRequestRemoved,
  PawnRequested
} from "../generated/schema"

export function handleNftDelisted(event: NftDelistedEvent): void {
  let entity = new NftDelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftListed(event: NftListedEvent): void {
  let entity = new NftListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftSold(event: NftSoldEvent): void {
  let entity = new NftSold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyer = event.params.buyer
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePawnAgreementRemoved(
  event: PawnAgreementRemovedEvent
): void {
  let entity = new PawnAgreementRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.borrower = event.params.borrower
  entity.lender = event.params.lender
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePawnRequestApproved(
  event: PawnRequestApprovedEvent
): void {
  let entity = new PawnRequestApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.borrower = event.params.borrower
  entity.lender = event.params.lender
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.loanAmount = event.params.loanAmount
  entity.loanDuration = event.params.loanDuration
  entity.interestRate = event.params.interestRate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePawnRequestRemoved(event: PawnRequestRemovedEvent): void {
  let entity = new PawnRequestRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.borrower = event.params.borrower
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePawnRequested(event: PawnRequestedEvent): void {
  let entity = new PawnRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.borrower = event.params.borrower
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.loanAmount = event.params.loanAmount
  entity.loanDuration = event.params.loanDuration
  entity.interestRate = event.params.interestRate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
