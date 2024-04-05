import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  NftDelisted,
  NftListed,
  NftSold,
  OwnershipTransferred,
  PawnAgreementRemoved,
  PawnRequestApproved,
  PawnRequestRemoved,
  PawnRequested
} from "../generated/NftPawnShop/NftPawnShop"

export function createNftDelistedEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt
): NftDelisted {
  let nftDelistedEvent = changetype<NftDelisted>(newMockEvent())

  nftDelistedEvent.parameters = new Array()

  nftDelistedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  nftDelistedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftDelistedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftDelistedEvent
}

export function createNftListedEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt
): NftListed {
  let nftListedEvent = changetype<NftListed>(newMockEvent())

  nftListedEvent.parameters = new Array()

  nftListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return nftListedEvent
}

export function createNftSoldEvent(
  buyer: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt
): NftSold {
  let nftSoldEvent = changetype<NftSold>(newMockEvent())

  nftSoldEvent.parameters = new Array()

  nftSoldEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  nftSoldEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftSoldEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftSoldEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return nftSoldEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPawnAgreementRemovedEvent(
  borrower: Address,
  lender: Address,
  nftAddress: Address,
  tokenId: BigInt
): PawnAgreementRemoved {
  let pawnAgreementRemovedEvent = changetype<PawnAgreementRemoved>(
    newMockEvent()
  )

  pawnAgreementRemovedEvent.parameters = new Array()

  pawnAgreementRemovedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  pawnAgreementRemovedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  pawnAgreementRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  pawnAgreementRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return pawnAgreementRemovedEvent
}

export function createPawnRequestApprovedEvent(
  borrower: Address,
  lender: Address,
  nftAddress: Address,
  tokenId: BigInt,
  loanAmount: BigInt,
  loanDuration: BigInt,
  interestRate: BigInt
): PawnRequestApproved {
  let pawnRequestApprovedEvent = changetype<PawnRequestApproved>(newMockEvent())

  pawnRequestApprovedEvent.parameters = new Array()

  pawnRequestApprovedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  pawnRequestApprovedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  pawnRequestApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  pawnRequestApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  pawnRequestApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "loanAmount",
      ethereum.Value.fromUnsignedBigInt(loanAmount)
    )
  )
  pawnRequestApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "loanDuration",
      ethereum.Value.fromUnsignedBigInt(loanDuration)
    )
  )
  pawnRequestApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "interestRate",
      ethereum.Value.fromUnsignedBigInt(interestRate)
    )
  )

  return pawnRequestApprovedEvent
}

export function createPawnRequestRemovedEvent(
  borrower: Address,
  nftAddress: Address,
  tokenId: BigInt
): PawnRequestRemoved {
  let pawnRequestRemovedEvent = changetype<PawnRequestRemoved>(newMockEvent())

  pawnRequestRemovedEvent.parameters = new Array()

  pawnRequestRemovedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  pawnRequestRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  pawnRequestRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return pawnRequestRemovedEvent
}

export function createPawnRequestedEvent(
  borrower: Address,
  nftAddress: Address,
  tokenId: BigInt,
  loanAmount: BigInt,
  loanDuration: BigInt,
  interestRate: BigInt
): PawnRequested {
  let pawnRequestedEvent = changetype<PawnRequested>(newMockEvent())

  pawnRequestedEvent.parameters = new Array()

  pawnRequestedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  pawnRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  pawnRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  pawnRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "loanAmount",
      ethereum.Value.fromUnsignedBigInt(loanAmount)
    )
  )
  pawnRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "loanDuration",
      ethereum.Value.fromUnsignedBigInt(loanDuration)
    )
  )
  pawnRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "interestRate",
      ethereum.Value.fromUnsignedBigInt(interestRate)
    )
  )

  return pawnRequestedEvent
}
