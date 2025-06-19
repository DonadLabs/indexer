/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  DonadManager,
  DonadManager_Donated,
  DonadManager_FundraisingRegistered,
  DonadManager_WithdrawalMade,
} from "generated";

DonadManager.Donated.handler(async ({ event, context }) => {
  const entity: DonadManager_Donated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fundraiseId: event.params.fundraiseId,
    donor: event.params.donor,
    amount: event.params.amount,
    timestamp: event.params.timestamp,
  };

  context.DonadManager_Donated.set(entity);
});

DonadManager.FundraisingRegistered.handler(async ({ event, context }) => {
  const entity: DonadManager_FundraisingRegistered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fundraiseId: event.params.fundraiseId,
    title: event.params.title,
    description: event.params.description,
    targetAmount: event.params.targetAmount,
    targetDate: event.params.targetDate,
  };

  context.DonadManager_FundraisingRegistered.set(entity);
});

DonadManager.WithdrawalMade.handler(async ({ event, context }) => {
  const entity: DonadManager_WithdrawalMade = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fundraiseId: event.params.fundraiseId,
    amount: event.params.amount,
    remarks: event.params.remarks,
    withdrawalAddress: event.params.withdrawalAddress,
    timestamp: event.params.timestamp,
  };

  context.DonadManager_WithdrawalMade.set(entity);
});
