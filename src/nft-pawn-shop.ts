import { BigInt, Address } from "@graphprotocol/graph-ts"
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
  ActiveListing,
  ActivePawnAgreement,
  ActivePawnRequest,
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
  let nftDelisted = NftDelisted.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  let activeListing = ActiveListing.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  if(!nftDelisted) {
    nftDelisted = new NftDelisted(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  }

  nftDelisted.seller = event.params.seller
  nftDelisted.nftAddress = event.params.nftAddress
  nftDelisted.tokenId = event.params.tokenId
  nftDelisted.blockNumber = event.block.number
  nftDelisted.blockTimestamp = event.block.timestamp
  nftDelisted.transactionHash = event.transaction.hash

  activeListing!.buyer = Address.fromString('0x000000000000000000000000000000000000dEaD')

  nftDelisted.save()
  activeListing!.save()
}

export function handleNftListed(event: NftListedEvent): void {
  let nftListed = NftListed.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  let activeListing = ActiveListing.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  if(!nftListed) {
    nftListed = new NftListed(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  }
  if(!activeListing) {
    activeListing = new ActiveListing(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  }
  nftListed.seller = event.params.seller
  nftListed.nftAddress = event.params.nftAddress
  nftListed.tokenId = event.params.tokenId
  nftListed.price = event.params.price
  nftListed.blockNumber = event.block.number
  nftListed.blockTimestamp = event.block.timestamp
  nftListed.transactionHash = event.transaction.hash

  activeListing.seller = event.params.seller
  activeListing.buyer = null
  activeListing.nftAddress = event.params.nftAddress
  activeListing.tokenId = event.params.tokenId
  activeListing.price = event.params.price
  activeListing.blockNumber = event.block.number
  activeListing.blockTimestamp = event.block.timestamp
  activeListing.transactionHash = event.transaction.hash

  nftListed.save()
  activeListing.save()

}

export function handleNftSold(event: NftSoldEvent): void {
  let nftSold = NftSold.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  let activeListing = ActiveListing.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  if(!nftSold) {
    nftSold = new NftSold(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  }

  nftSold.buyer = event.params.buyer
  nftSold.nftAddress = event.params.nftAddress
  nftSold.tokenId = event.params.tokenId
  nftSold.price = event.params.price
  nftSold.blockNumber = event.block.number
  nftSold.blockTimestamp = event.block.timestamp
  nftSold.transactionHash = event.transaction.hash

  activeListing!.buyer = event.params.buyer
  nftSold.save()
  activeListing!.save()

}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {

}

export function handlePawnAgreementRemoved(
  event: PawnAgreementRemovedEvent
): void {
  let pawnAgreementRemoved = PawnAgreementRemoved.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  let activePawnAgreement = ActivePawnAgreement.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))

  if(!pawnAgreementRemoved) {
    pawnAgreementRemoved = new PawnAgreementRemoved(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  }

  pawnAgreementRemoved.borrower = event.params.borrower
  pawnAgreementRemoved.lender = event.params.lender
  pawnAgreementRemoved.nftAddress = event.params.nftAddress
  pawnAgreementRemoved.tokenId = event.params.tokenId
  pawnAgreementRemoved.blockNumber = event.block.number
  pawnAgreementRemoved.blockTimestamp = event.block.timestamp
  pawnAgreementRemoved.transactionHash = event.transaction.hash

  activePawnAgreement!.lender = Address.fromString('0x000000000000000000000000000000000000dEaD')

  pawnAgreementRemoved.save()
  activePawnAgreement!.save()
}

export function handlePawnRequestApproved(
  event: PawnRequestApprovedEvent
): void {
  let pawnRequestApproved = PawnRequestApproved.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  let activePawnAgreement = ActivePawnAgreement.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  let activePawnRequest = ActivePawnRequest.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))

  if(!pawnRequestApproved) {
    pawnRequestApproved = new PawnRequestApproved(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  }
  if(!activePawnAgreement) {
    activePawnAgreement = new ActivePawnAgreement(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  }

  pawnRequestApproved.borrower = event.params.borrower
  pawnRequestApproved.lender = event.params.lender
  pawnRequestApproved.nftAddress = event.params.nftAddress
  pawnRequestApproved.tokenId = event.params.tokenId
  pawnRequestApproved.loanAmount = event.params.loanAmount
  pawnRequestApproved.loanDuration = event.params.loanDuration
  pawnRequestApproved.interestRate = event.params.interestRate
  pawnRequestApproved.blockNumber = event.block.number
  pawnRequestApproved.blockTimestamp = event.block.timestamp
  pawnRequestApproved.transactionHash = event.transaction.hash

  activePawnAgreement.borrower = event.params.borrower
  activePawnAgreement.lender = event.params.lender
  activePawnAgreement.nftAddress = event.params.nftAddress
  activePawnAgreement.tokenId = event.params.tokenId
  activePawnAgreement.loanAmount = event.params.loanAmount
  activePawnAgreement.loanDuration = event.params.loanDuration
  activePawnAgreement.interestRate = event.params.interestRate
  activePawnAgreement.blockNumber = event.block.number
  activePawnAgreement.blockTimestamp = event.block.timestamp
  activePawnAgreement.transactionHash = event.transaction.hash

  activePawnRequest!.lender = event.params.lender

  pawnRequestApproved.save()
  activePawnAgreement.save()
  activePawnRequest!.save()

}

export function handlePawnRequestRemoved(event: PawnRequestRemovedEvent): void {
  let pawnRequestRemoved = PawnRequestRemoved.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  let activePawnRequest = ActivePawnRequest.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))

  if(!pawnRequestRemoved) {
    pawnRequestRemoved = new PawnRequestRemoved(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  }

  pawnRequestRemoved.borrower = event.params.borrower
  pawnRequestRemoved.nftAddress = event.params.nftAddress
  pawnRequestRemoved.tokenId = event.params.tokenId
  pawnRequestRemoved.blockNumber = event.block.number
  pawnRequestRemoved.blockTimestamp = event.block.timestamp
  pawnRequestRemoved.transactionHash = event.transaction.hash

  activePawnRequest!.lender = Address.fromString('0x000000000000000000000000000000000000dEaD')

  pawnRequestRemoved.save()
  activePawnRequest!.save()
}

export function handlePawnRequested(event: PawnRequestedEvent): void {
  let pawnRequested = PawnRequested.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  let activePawnRequest = ActivePawnRequest.load(getIdFromEvent(event.params.tokenId, event.params.nftAddress))

  if(!pawnRequested) {
    pawnRequested = new PawnRequested(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  }
  if(!activePawnRequest) {
    activePawnRequest = new ActivePawnRequest(getIdFromEvent(event.params.tokenId, event.params.nftAddress))
  }

  pawnRequested.borrower = event.params.borrower
  pawnRequested.nftAddress = event.params.nftAddress
  pawnRequested.tokenId = event.params.tokenId
  pawnRequested.loanAmount = event.params.loanAmount
  pawnRequested.loanDuration = event.params.loanDuration
  pawnRequested.interestRate = event.params.interestRate
  pawnRequested.blockNumber = event.block.number
  pawnRequested.blockTimestamp = event.block.timestamp
  pawnRequested.transactionHash = event.transaction.hash

  activePawnRequest.borrower = event.params.borrower
  activePawnRequest.lender = null
  activePawnRequest.nftAddress = event.params.nftAddress
  activePawnRequest.tokenId = event.params.tokenId
  activePawnRequest.loanAmount = event.params.loanAmount
  activePawnRequest.loanDuration = event.params.loanDuration
  activePawnRequest.interestRate = event.params.interestRate
  activePawnRequest.blockNumber = event.block.number
  activePawnRequest.blockTimestamp = event.block.timestamp
  activePawnRequest.transactionHash = event.transaction.hash

  pawnRequested.save()
  activePawnRequest.save()


}

function getIdFromEvent(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString()
}
