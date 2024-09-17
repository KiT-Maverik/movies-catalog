import { api, notFoundContract } from "api";
import { testSuite } from "App";

describe(testSuite.contractValidation, () => {
  describe("Not Found", () => {
    it("should return 404 and a message in body", async () => {
      const response = await api.get("/not-existing");

      expect(response.status).toBe(404);

      expect(
        notFoundContract.response.safeParse(response.data).success,
      ).toBeTruthy();
    });
  });
});
