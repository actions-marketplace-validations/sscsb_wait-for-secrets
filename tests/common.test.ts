import {
    generateSecretURL,
    setSecrets,
    parseDataFromEnvironment,
  } from "../src/common";
  
  test("generateSecretURL()", () => {
    expect(generateSecretURL("stepsec", "test", "12345")).toBe(
      "https://stepsec.github.io/secrets/stepsec/test/12345"
    );
  });
  
  test('setSecrets()', () => {
    var secrets = [{Name: "Secret_1", Value: "Mock_Value"}, {Name: "Secret_1", Value: "Mock_Value"}]
    expect(setSecrets(secrets)).toBe(undefined);
  });
  
  test("parseDataFromEnvironment()", () => {
    process.env["GITHUB_REPOSITORY"] = "stepsec/test";
    process.env["GITHUB_RUN_ID"] = "12345";
  
    expect(parseDataFromEnvironment()).toStrictEqual([
      "stepsec",
      "test",
      "12345",
    ]);
  });