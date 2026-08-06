import { getAppConfig } from "@/lib/config";

describe("app config", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("enables downloads in normal web mode by default", () => {
    delete process.env.NOSA_APP_MODE;
    delete process.env.NOSA_DISABLE_DOWNLOADS;
    expect(getAppConfig().allowDownloads).toBe(true);
  });

  it("disables downloads in exhibition mode", () => {
    process.env.NOSA_APP_MODE = "exhibition";
    expect(getAppConfig().allowDownloads).toBe(false);
  });
});
