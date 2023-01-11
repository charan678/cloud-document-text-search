import server from "../../index";
import request from "supertest";

describe("Test example", () => {
  test("Healthcheck GET /", async() => {
     await request(server)
    .get("/v1/healthcheck")
    .expect("OK")
    .expect(200);
  });
});

afterEach(() => {
  return  server && server.close();
});

