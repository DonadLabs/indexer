import assert from "assert";
import { 
  TestHelpers,
  DonadManager_Donated
} from "generated";
const { MockDb, DonadManager } = TestHelpers;

describe("DonadManager contract Donated event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for DonadManager contract Donated event
  const event = DonadManager.Donated.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("DonadManager_Donated is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await DonadManager.Donated.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualDonadManagerDonated = mockDbUpdated.entities.DonadManager_Donated.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedDonadManagerDonated: DonadManager_Donated = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      fundraiseId: event.params.fundraiseId,
      donor: event.params.donor,
      amount: event.params.amount,
      timestamp: event.params.timestamp,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualDonadManagerDonated, expectedDonadManagerDonated, "Actual DonadManagerDonated should be the same as the expectedDonadManagerDonated");
  });
});
